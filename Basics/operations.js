let score = 77;

//ways of writing typeof
//console.log(typeof score);
console.log(typeof(score));

//----------CONVERSION--------------
let marks = "88";
let valueInNumber = Number(marks);// we converted the string value of marks in number.
console.log(typeof valueInNumber);


let address = "123abcd"
let ValueOfAddress = Number(address);
console.log(typeof ValueOfAddress); // will print number but its not valid bcz we have both string as well as number but why?
console.log(ValueOfAddress);  //here it ignored all the values and gave output on the conversion only.
//NaN is also special type. means Not a Number

// let number = null
let number = undefined;
let ValueOfNumber = Number(number);
console.log(typeof ValueOfNumber); //number
console.log(ValueOfNumber);        // returns 0 for null and NaN for undefined


//string which cant be converted will also return NaN
// bollean true => 1 and false => 0

//let isLoggedIn = 1;
let isLoggedIn = "";     //false after" " one space in between also gives true
//let isLoggedIn = "Kinjal";  //true
let ValueOfLogedIn = Boolean(isLoggedIn);
console.log(ValueOfLogedIn);

let someNumber=33;

let StringNumber= String(someNumber);
console.log(StringNumber);
console.log(typeof(StringNumber));


//------------OPERATIONS--------------

let value = 3;
let negValue = -value;
//console.log(negValue);  // converts to negative
console.log(2+2);
console.log(8-6);
console.log(9*5);
console.log(2**3);
console.log(10/5);
console.log(2%3);

let str1 = "hello";
let str2 = " Kinjal";
let str3 = str1+str2;
console.log(str3);

//Not suggested to write in these ways in coorporate.
console.log("1"+2); //it always takes first value and convert it into that
console.log(1+"2");
console.log("1"+2+2);      //122
console.log(1+"2"+2);      //122
console.log(1+2+"2");      //32 bcz firt addition and then 2 is concatenated.

console.log(+true); // returns 1 bcz now coneverted to number
console.log(+" ");   // returns 0 

let gameCounter = 200;
//gameCounter++;            //postfix 200 than +1
++gameCounter;              //prefix  201 directly
console.log(gameCounter);

