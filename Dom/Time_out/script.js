//window object in browser is having so many properties inside it setTimeOut(),setIterval,etc...

//setTimeOut needs a handler or we can call it callback function.
//2000=2sec
//it will be printing the name once only after 2 sec on browser.
const sayKinjal = function(){
    console.log("kinjal");
}

//we made a simple function and passed the refrence of it not calling bcz its a handler so.
//setTimeout(sayKinjal,2000)

const Change_text = function(){document.querySelector('h1').innerHTML="Hello My Name is Kinjal";}
const Change_Me=setTimeout(Change_text,2000);

//How to stop that event before timeout,here if we click the stop button before 2 sec it will not change the text.
//clearTimeout(Change_Me);//will not bcz we need to define it on any event.

document.querySelector('#stop').
addEventListener('click',function(){
    clearTimeout(Change_Me);
    console.log("Stopped")
})