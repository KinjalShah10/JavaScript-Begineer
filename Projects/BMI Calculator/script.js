//here we are writing the taking of height and weight values inside the form bcz we need it when we are calculating it.
//if we write them outside then it will take the empty values.


//firstly we targeted to the whole form and how to sumbit the form.
const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()//preventDefault will hold the values.

const height = parseInt(document.querySelector('#height').value);//.value will take values from the user.
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
const guide = document.querySelector('#weight_guide');


if(height === '' || height < 0 || isNaN(height)){ //isNAN will check the number is there.
    results.innerHTML = `Please give a valid height ${height}`;//innerHTML will directly change the content inside the HTML
    
}
else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;

}
else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)//formula

    //shows result
    results.innerHTML = `<span> Resulted Weight is: ${bmi}</span>`

    if(bmi <= 18.6){
        guide.innerHTML = "Under Weight"
    }
    else if(bmi > 18.6 && bmi <= 24.9){
        guide.innerHTML = `Normal Range`
    }
    else if(bmi>= 24.9)
    {
        guide.innerHTML = `Over Weight`
    }
}
});
