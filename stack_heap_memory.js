/*Memory are of two types:Stack and Heap
stack = primitive = copy of the value
heap = non primitive = refrence
*/


//STRING

let myYouTubeName = "vwejfyawyfvjewavhflyuwv" 
let anotherName = myYouTubeName
anotherName = "gogogo"
console.log(myYouTubeName);
console.log(anotherName); // value got changed bcz of stack memory concept

//OBJECT

let userOne ={
    email:"shbjhg",
    upi :"12344"
}

let userTwo = userOne;
userOne.email="kinkinkin"
console.log(userOne.email);  // values didnt changed bcz here it is heap memory concept it wil only poit to the refrence.
console.log(userTwo.email);



















