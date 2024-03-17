//scopes let,var,const
//scope works different in browser environment and node environment.
//scope means a block of program {}

let a = 300; //global scope
if (true){
    let a=10
    const b =20
    //var c=40
    console.log("Inner",a);
    
}  //it is block scope means the things we write inside the scope should not be acessed outside

console.log(a); //error bcz all are defined inside the block if we want to acess it we sholud use it inside the block
//console.log(b);
//console.log(c); //it will print bcz var is globally acessed and its not good so not to use anywhere

function one(){
    const username = "kinjal"


function two(){
    const website = "youtube"
    console.log(username);
}
//console.log(website);
two()
}
one()

if (true){
    const username = "kinjal"
    if (username==="kinjal"){
        const website = " youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);

//************Intresting*********
//types to declare the function

console.log(addone(5))
function addone(num){
    return num+1
}
 // will print no error

addTwo(4)
const addTwo = function(num){
    return num+2
}
//will throe error bcz we made the function inside one variable and problem is there of hoisting.