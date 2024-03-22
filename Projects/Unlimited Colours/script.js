//generate a random colour

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let colour = "#"
    for(let i = 0; i<6;i++){
        colour += hex[Math.floor(Math.random()*16)];
    }
    return colour;

};
let IntervalId;
const StartChangingClour = function(){
   if(!IntervalId){
    IntervalId = setInterval(changeBgColor,1000);
   }
   function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
}
};

const StopChangingClour = function(){
    clearInterval(IntervalId);
    //now when we clear it it flushes all the values but memory is not free so will use null.
    IntervalId = null; //but here if we directly put null it will not work so we need to check for that if and else conditions are written above.
};
document.querySelector("#start").addEventListener('click',StartChangingClour)
document.querySelector("#stop").addEventListener('click',StopChangingClour)