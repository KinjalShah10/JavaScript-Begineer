const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//for each is used for node list 
buttons.forEach(function(button)
{
    //console.log(button);
    button.addEventListener('click', function(e)
    {
        console.log(e);
        console.log(e.target);//target will be targeting that particular id and function on that.
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "black"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "orange"){
            body.style.backgroundColor = e.target.id;
        }

    });
});