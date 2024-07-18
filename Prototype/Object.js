function multiplyBy5(num) {
    return num*5
    
}

multiplyBy5.power = 2; // . access toh object ke sath lagta hai toh function bhi kya ek object hai??
//=> yes its an object 

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);//function ki properties means current context so {}

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`Score is ${this.score}`);
}



const Biscuit =  new createUser("Monaco",25);
const juice =  new createUser("Orange",250);

Biscuit.printMe();
juice.printMe();