const user = {
    username : "kinjal",
    price:80,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to the website`)
        console.log(this);  //will give current context
    }
}//this will refer to the current context.

// user.welcomeMessage()
// user.username = "bro" //we are not declaring the value as hard sonow the current context will go to bro
// user.welcomeMessage()

// console.log(this); //will give empty bcz we are in node 
// //in browser if we do then will give window its the global object of browser

// function ball(){
//     console.log(this);
//     console.log(this.username) //undefined
// }
// ball()

// const ball = function(){
//     let username = "kinjal"
//     console.log(this.username);
// }
// ball() //also gives undefined

const ball = () =>{
    let username = "kinjal"
    console.log(this.username);
}
ball() //arrow function

//syntax: const fun_name = (parameters) =>{}

// const add = (num1,num2) =>{
//     return num1+num2
// }
// console.log(add(2,3))

//Implicit return we not need to write the return statment for a single line of code.
//const add = (num1,num2) => num1+num2
//const add = (num1,num2) => (num1+num2)

const add = (num1,num2) => ({username:"kinjal"})  //we cant access the object without the paranthesis
console.log(add(2,3))



