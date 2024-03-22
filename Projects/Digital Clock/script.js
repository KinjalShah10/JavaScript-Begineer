const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')


//used to set time interval we needed
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();

},1000)