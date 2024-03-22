//we created one package in that we declared various things and then we can create there copies on various places.
//syntax: func_keyword func_name(parametres){
//    func_def
//}

// function sayMyname(){

// console.log("k");
// console.log("i");
// console.log("n");
// console.log("j");
// console.log("a");
// console.log("l");
// }

//func refrence is sayMyname and (arguments)are the execution
//sayMyname();

function addTwoNum(num1,num2){
    console.log(num1+num2);
}

//addTwoNum(); //prints NaN
// addTwoNum(3,"4");
// addTwoNum("3",4);
// addTwoNum("A","s")
// addTwoNum(4,null)
const result = addTwoNum(3,2);
console.log("Result",result); //undefined so dont use function like this.

function addTwoNum(num1,num2){
    //let result=(num1+num2);
    //return result;
    //still dosents prints anything
    //console.log("kinjal");   //this will not print anything bcz as the function def says we cant write anything after the function is returned.
    return num1+num2;
}

function loginUserMessage(username){
    if(username === undefined)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("kinjal"))
console.log(loginUserMessage( ))  //undefined

function loginUserMessage(username){
    if(" ")
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200,400,500)); // will return only the 1 value
//... is rest and spread operator both here it is rest
//rest will take all the values u give.

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,3000));
// will skip both val1 and val2 and will take other vaues.


//how to pass object in the function?
const user = {
    username:"kinjal",
    price:80
}

//will handle geniric value is we dont pass anyobject
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

//pass object directly
handleObject(user)
handleObject({
username:"kinjal",
price:110
})

const myNewArray = [200,300,400]

function returnSecondValue(getArray){
return getArray[0]
}

//console.log(returnSecondValue([200,400,500]))
console.log(returnSecondValue(myNewArray));