//const myArr = [0,1,2,3,,4,5,true,false]
//we can store any type of array
const myArr = [0,1,2,3,4,5]  // its an object and we can store multiple types of items in single variable.
// js elements can be resizeable.

console.log(myArr[3]); //way of accessing element in an array.

//arrays make shallow copies means arrays store same refrence point that is changes reflected to original array also.
//and deep copies dosent share same refrence point.

//---------Methods----------
const myHeros = ["Tom","Jerry"];
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0]);

// myArr.push(6,7)
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr); //unshift insterts a value at 1st poition.
// myArr.shift()
// console.log(myArr); 

console.log(myArr.includes(3));
console.log(myArr.indexOf(9));

const newArr = myArr.join(); //converts all the values in string
console.log(myArr);
console.log(newArr);

//--------SPLICE   SLICE-----------------

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1); //dont include 3
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)//dont include from 1 to 3
console.log("c ",myArr);

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //array inside array
// console.log(marvel_heros[3][2]);  

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

//SPREAD
//water glass spreds on falling

const allHeros = [...dc_heros,marvel_heros]
console.log(allHeros);

const another_arr = [1,2,3,4,[5,5],7,8,[9,0,[1,2,3]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr); //gives array without any nested array.


console.log(Array.isArray("Kinjal"))
console.log(Array.from("Kinjal")) //converts into array
console.log(Array.from({name:"Kinju"}))  //intresting

let score1 = 100;
let score2 =200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))//returns a array from set of elements
