//         GOAL


let myName = "Kinjal     "

//console.log(myName.length); gives 11 which is wrong.
console.log(myName.truelength); //undefined bcz not any prototype

// we want one single property which defines all the ture length we can acjhjieve it by trim.length but we dont want to writre this big every time soo....

//      Some Understanding 

let myHeros = ["thor","Spidey"]

let heroPower = {
    thor: "hammer",
    Spidey  : "sling",

    getSpideyPower : function(){
        console.log(`Spidey Power is  ${this.Spidey}`);
    }
}

Object.prototype.Kinjal = function(){
    console.log(`Kinjal is there in all`);
}
//heroPower.Kinjal()
myHeros.Kinjal()

Array.prototype.heykinjal = function (){
    console.log(`Hey bubuuuuu`);
}

myHeros.heykinjal();
//heroPower.heykinjal(); // yes error and its correct bcz jab niche acess de uska meaning yeh nahi hota ki upar bhi de diya


//----------   Inheritance  ---------------

const User = {
    name : "Akriti",
    email: "akriti@gmail.com",
}
const Teacher = {
    makeVideo : true
}

const TechingSupport = {
    isAvialable : false
}

const TASupport = {
    makeAssignment : "Js assignment",
    fullTime: true,
    __proto__: TechingSupport
}

Teacher.__proto__= User


// Modern Syntax

//console.log(Object.setPrototypeOf(TechingSupport,Teacher));


// ------  SOLUTION  -------------

let anotherUserName = "Kinjal         "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`Truelength is ${this.trim().length}`);
}
anotherUserName.trueLength();
"Kinjal".trueLength();
"ICEEEEEEEEEE".trueLength();