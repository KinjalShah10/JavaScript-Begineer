// Javascript is having .js as an extension.
// There is no difference between js and txt file till it is executed but when we want it in software there shows its difference.
// In olden days we write code of js on browser bcz we were not having the environment or the software for it .
// But now we can run it on node which is one of the standalone js.

//----------VARIABLES & CONST------------
//when we want to store any data of any user we need some memory called variable

console.log("Kinjal");
// will print whatever we want to display on screen.

const userId = 123;
// const is used to make the value permanent that is cant be changed.
// userId = 456 will throw error bcz we cant change the value
console.log(userId);

let userEmail = "Jainil@gmail.com"
userEmail = "kinjal@gmail.com"
// let can be changed
// let is used to overcome the block scope problem.
// let is defined in the block of code 


var userPassword = "12345678"
userPassword = "098765432"
//var also can be changed
//var is not used as a declaration because it has a block scope problem 
// it values can be changed multiple times.

userCity = "Jaipur"
userCity="Banglore"
//why we not written anything to sore userCity??
// one way of declaring a variable


console.table([userEmail,userPassword,userCity])
//table is the property which makes print multiple variable in single line.

// now if we dont give any value to a variable then??

let userName;
console.log(userName) // will print undefined bcz no value is defined.