//------DATE---------

//date is an object start from 1st moment ie from jan 1
//always claculated in milisecond so gives long strong.

//Temporal is asked by the tc39 for work like math

//but for now we need to learn like exitsting

let myDate = new Date()
console.log(myDate); //not readable also

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof(myDate));

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toDateString()) //month starts from 0 in js
//let myCreatedDate = new Date(2023,0,23,5,3);
//console.log(myCreatedDate.toLocaleString()) 

let myCreatedDate1 = new Date("2023-01-14"); //to declare specific date by us
console.log(myCreatedDate.toLocaleString()) 

let myTimeStamp = Date.now();
console.log(myTimeStamp); //usually used in quizes

console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);  //will give decimal also so we will use floor
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate1.toLocaleString('default',{
    weekday: "long"
})
// from this we can define our type of date,day,timezone,weekdays.
