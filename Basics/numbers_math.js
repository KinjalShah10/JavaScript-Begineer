const score = 500;
console.log(score) //automatically taken as number so directly give 500
const balance = new Number(200);
console.log(balance); //specifically shows as number

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //precision value upto 2

const otherNum = 23.78679  // gives prision of 1st 3 values
console.log(otherNum.toPrecision(3)); //rounds to 23.8

const otherNum1 = 123.78679
console.log(otherNum1.toPrecision(3)); //rounds to 124
const otherNum2 = 1123.78679
console.log(otherNum2.toPrecision(3)); //rounds to 1.12e+3

const hundreds = 1000000000;
console.log(hundreds.toLocaleString()); // converts to us standard.
console.log(hundreds.toLocaleString('en-IN')); // converts to indian standard.


//Methods in Numbers
// Number.MAX_VALUE
// Number.MIN_VALUE
// Number.EPSILON

//------------MATHS------------------------
console.log(Math);
console.log(Math.abs(-4)); //neg to pos but dosent means pos to neg
console.log(Math.round(4.83));
console.log(Math.ceil(4.83));
console.log(Math.floor(4.83));
console.log(Math.min(-4,-3,9,0));
console.log(Math.max(-4,-3,9,0));

console.log(Math.random()); // always value comes between 0 to 1.
console.log((Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1 );

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1))+min);
// math.random => 0 to 1
//now we multi with 10 then it shifted to 10 but sometimes 0.1
//now, we do floor , so now we do + 1 now we will get from 0 to 9 
