const sayDate= function(str){
    console.log(str, Date.now());
}
let intervalId;
intervalId = function () {setInterval(sayDate,2000,"hi")};
const stopInterval = function () {clearInterval(intervalId)};
//set interval can also have 3rd parameter whichever we want to give

//const stopInterval = clearInterval(intervalId);

document.querySelector('#start').
addEventListener('click',intervalId);
    
document.querySelector('#stop').
addEventListener('click',stopInterval);
// stop nahi hora