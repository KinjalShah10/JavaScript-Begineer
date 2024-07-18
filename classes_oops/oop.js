//-------  Object Literal --------

// const User = {
//     username : "Kinjal",
//     login : 8,
//     signedIn : true,

//     getUserDetails : function (){
//         //console.log("Got user details");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }

// console.log(User.getUserDetails());
// console.log(this);

// when we want to use map or any other prototype how it will know that which function i want to loop?
// => here we use this keyword to specify the current Context.

// -------- Constructor Function ------------

//new keyword is used to make new context also called cunstructor function.

function user(username, login , isLoggedIn) {
    this.username = username;
    this.login = login;
    this.isLoggedIn = isLoggedIn

    return this

}

const userOne = new user("kinjal",10,true);
const userTwo = new user("Somuuuu",10,true);
//when we print the userOne again it will overwrite the values of two over the one so its a big problem.

console.log(userOne);
console.log(userTwo);

console.log(userOne.username);


//---------New Keyword OR Constructor Function --------

// when we write new keyword it creates the empty object, called instace
// then constructor is called
// then gives all the arguments in it
// then its executed

console.log(userOne.constructor);
