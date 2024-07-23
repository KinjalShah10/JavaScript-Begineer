//const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descriptor);

//console.log(Math.PI);
// we cant overwrite the Math.PI value


// can we also give property like this which our friend cant change

const chai = {
    name: "ginger chai",
    price: 240,
    isAvailable: true,

    orderChai : function(){
        console.log("chai nahi bani");

    }
}

//how to access values
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// how to set properties and other user cant change
Object.defineProperty(chai,"name",{writable: false,enumerable:false,configurable:false})
// enumerable meaqns we cant define loop over there.
//console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// object is not itreatable so we write entries
for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}:${value}`);
    }
    
}