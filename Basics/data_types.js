// olden codes were replaced by new one but we need to preserve so
"use strict"; // treat all code as new version of javascript but now it is not necessay to write.

//alert("Hello"); // here it will throw error bcz we r on node environment.In browser we can write bcz its having own module.

//----------READABILITY----------------------
//console.log(3+3) console.log("Kinjal") //throws error
//coding is having some readability concept so it should be followed.
console.log(3+3);console.log("Kinjal") //automatically considered as a new line

// tc39.com ECMA scripts write the standards of the javascript,rather than mdn docs.

//-------------DATA TYPES---------------------
let name = "Kinjal"  //string can be written in '' or " "
let age = 18         //number
let isLoggedIn = false //boolean
console.table([name,age,isLoggedIn])
//number => 2 to power53
//boolean true or false

//null is a datatype with standalone value
//undefined is when the value is not assigned.
// null is the representation of empty value.

let state=null;
console.log(state);//assigned null value
let country;
console.log(country);//not assigned any value
let village = " "; // its different bcz its type is defined as a string not null.
console.log(village);//will not give anything

// we will take a temperature example means when we are given a value of temperature to the server and it will not give 0 value bcz its valid value then it will give null.

//symbol more in react but it is used as for uniquieness.

// object

//-----------TYPEOF----------------------
console.log(typeof "kinjal");   //string
console.log(typeof age);        //number
console.log(typeof null);       //will return object
console.log(typeof undefined);  //undefined is a type in js

//-----------Summary----------------

// Javascript is dynamically typed language.

// 2 types: primitive and non primitive
//Primitive: (call by value) 7 types String,Bollean,Number,null,undefined,symbol,BigInt,

//Reference type (Non primitive):
//Arrays,Objects,Functions

const id = Symbol('1234');
const anotherId = Symbol('1234');
console.log(typeof(id)); // type is symbol

console.log(id === anotherId); //both are same but as we used symbol so it will give uniqueness in id so return false.
console.log(anotherId);

//bigInt : 46845341687468436546868n at last n so will convert to bigInt.

//Arrays
const heros = ["Kinjal","Amit","Somil"]
//console.log(heros);
console.log(typeof(heros));

//Objects :Key Value pairs
let myObj=
{
    name:"Kinjal",
    age:18
}
//console.log(myObj);
console.log(typeof(myObj));

const myFun = function()
{
    console.log("Hello Kinjal");
}

console.log(typeof(myFun));
