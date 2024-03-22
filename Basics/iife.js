//Immediately Invoked Function Expressions(iife)

//global scope pollution is done sometimes ehen some declareartion is done and to remove it

//normally written the function
// function work(){
//     console.log("DB connected")
// }
// work()

//iife written function
(function work(){
    console.log("DB connected");
})();

//():func def ():execution
//its invoked but to end this function we need to insert the ;

//this is named iife
(  function work1() {
    console.log("Db connected");
} ) ();


//problem was of semicolon not of simple or arrow function we can write both for iife.
//this both are simple iife
(  () => {
    console.log("Db connected");
} ) ();

(  (name) => {
    console.log(`Db connected to ${name}`);
} ) ("ganduu")
