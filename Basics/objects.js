//singleton object:- Koi pan constructer thi aapne jyare create karisu to singleton object banse
// means aa potani type nu ek aj object che
//if singleton thi nai banaviye to aena multiple instances pan bani sakhe





// declation of two types: literal and constructor
//Object.create => way of defining object in constructor
//singleton is made when we make it from constructor
//singleton is not made from literals.

//object literals


const mysym = Symbol("key1")
const JSuser = 
{
    name:"kinjal",
    "Fullname":"Kinjal Shah",
    mysym:"mykey",
    [mysym]:"key1",
    age:18,
    location:"jaipur",
    email:"shahkinjal.com",
    isLoggedIn:false,
    lastLogedinDays:["Monday","Sunday"]

}

console.log(JSuser.email)   //but we cant acesss all values using . operator
console.log(JSuser["email"])  //in interview it is good to use [] for acess of obj
//console.log(JSuser."Fullname") //error
console.log(JSuser.Fullname) //string directly taken as a value pair in object
console.log(JSuser.mysym)
console.log(typeof(JSuser.mysym));  //string
console.log(JSuser[mysym]);
console.log(typeof(JSuser[mysym]));  //string

//IMPORTANT abt symbol

//how to use a symbol as a key in this?
//declare the symbol then we can include in object it will not give any error but when we check its type then its not a symbol.
//so we will put [mysym] and also acess by []

JSuser.email = "shahkinjal.google.com"
//Object.freeze(JSuser);  //freezes the object after that we cant do any changes to it.
//JSuser.email = "shahkinjal.microsoft.com"
console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello jsuser");
}
JSuser.greeting2 = function(){
    console.log(`Hello jsuser,${this.name}`);
}
console.log(JSuser.greeting); //fun anonymous
console.log(JSuser.greeting()); //prints 
console.log(JSuser.greeting2()); //prints 


// Construtor
const tinderUser = new Object()   // singleton object
const tinderUser2 = {}  //non singleton object


tinderUser.id = "123@11"
tinderUser.name="kinjal"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = 
{
    email:"kinjal.com",
    Fullname:
    {
        userFullname:
        {
            first_name:"Kinjal",
            lastName:"Shah"
        }
    }
}
console.log(regularUser.Fullname.userFullname.first_name)
console.log(regularUser.Fullname?.userFullname.first_name)
//chaining means we will put? is it contain or not


const target = {1:"a", 2:"b"}
const source = {2:"c", 3:"d"}
//const obj3 = {obj1,obj2} //will print merging the array in string format
//const obj3 = Object.assign(obj1,obj2) //merge 2 objects
//const returnTarget = Object.assign(target,source) //empty para is working as a target 
const returnTarget = Object.assign(target,source)
//syntax:Object.assign(target,source);
console.log(target);  
// the main goal abt giving empty para is to assign the objects into new targeted one rather than in obj1.

console.log(returnTarget === target);

//WE will mostly us the spread opertaor
const obj3 = {...target,...source}
console.log(obj3);

const users =
[{
    id: 1 ,
    email:"shahkinjal111@gmail.com"
},{

},{

}]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //to acess values
console.log(Object.entries(tinderUser)); // array inside the array

console.log(tinderUser.hasOwnProperty('email'));

//we can know more methods from the prototypes.

//----------DESTRUCTURING-------------------
//both is done array and objects destruct

//array
const course ={
    coursename:"js in engilis",
    price:1300,
    tech:"js" 
}

//we will do it by . operator or [ ] but sometimes to make the code clear and not writing many times.
//we will floow this syntax

const{coursename} = course
const{coursename:c_name} = course //we just replaced it with other name
console.log(coursename); 
console.log(c_name); // will print same bcz its heap.

//making of the function and passing diff values.
//Destructuring
// const navbar = ({company}) =>
// {

// }
// //just calling the navbar
// navbar (company ="kinjal")

//when we put our work on others its called API......

//----------JSON----------------

// {
//     "name " : "kinjal",
//     "c_name":"js",
//     "price":"free"
// }
//its the syntax of json

