// declared by " " or ''
//concatenated by str1+str2

const name = "Kinjal"
const first_name = " Shah"

console.log(name+first_name); // not valid syntax

// use `` backticks and is called string interpolation.
console.log(`Hello my name is ${name} and First name is ${first_name}`);

const gameName = new String("Mario"); //string can be also declared by this way
console.log(gameName[0]); // here it will store in key value pairs like an object.
// string has may methods.
console.log(gameName.__proto__);  // it is used to acess different objects.


//Methods
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
// original value is not changed here bcz of stack memory...
console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0,3); //last value is not included
console.log(newString);

const anotherVar = gameName.slice(-8,2); // can also deal with negative value.
console.log(anotherVar); //start from the reverse

const newString1 = "          Jaduuuuu   "; //removes all the spaces
console.log(newString1.trim()); // works on whitespaces and/n chars also there is trim start and trim end

const url = "https://kinjal.com/kinjal%11Shah";
console.log(url.replace('%11','-'));

console.log(url.includes('kinjal'));
console.log(url.includes('ganduu'));

// string to array convert

console.log(url.split('-')); //split seprates by a seprator.





