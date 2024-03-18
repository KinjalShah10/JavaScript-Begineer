//here we are writing the taking of height and weight values inside the form bcz we need it when we are calculating it.
//if we write them outside then it will take the empty values.



const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
const guide = document.querySelector('#guide');


if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
    
}
else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;

}
else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)

    //show result
    results.innerHTML = `<span>${bmi}</span>`

    if(bmi<= 18.6){
        guide.innerHTML = `Under Weight`
    }
    else if(bmi>=18.6 && bmi <= 24.9){
        guide.innerHTML = `Normal Range`
    }
    else(bmi>=24.9)
    {
        guide.innerHTML = `Over Weight`
    }
}
});
