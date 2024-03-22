// console.log(2>10);
// console.log(2<=10);
// console.log(2==10);
// console.log(2 !=10);


console.log("2">1);  // automatically converted but not suggested to use diff datatypes
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0); //conversion problem 

//The reason is equality == and comparisions <,>,<=,>= works differently.
//comparisions convert null to number,treating it as 0,
//thats why (3) null >= 0 is true and (1) null>0 is false.

console.log(undefined ==0);
console.log(undefined >=0);
console.log(undefined <0);
// all gives false

//=== strictly checks with the data type
console.log("2"=== 2);