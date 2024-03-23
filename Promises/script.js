//Promises :- .then , .catch
//Tool:- fetch

//Promises:- means whichever task is given by us async will not completed now only from the queue,now only its not loaded inside,but will be completed in future thats the promise.
//promise is an object.

// It has 3 states:- 1  Pending : initial state,neither fullfilled nor rejected.
//                   2 fullfilled : operation was completed successfully.
//                   3 rejected : operation failed


//new keyword gives instace of an object same as class in java.
//new Promise is the direct object created by writing Promise.

//-----------promise creation----------
// 2 Parts :- resolve,reject
// const promiseOne = new Promise(function(resolve,reject){
//     //Do Async task
//     //db calls, cryptography,network
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     },1000)

// })

//resolve is simply a method which tells that when the task need to be completed async.

//---------Promise consuption---------
// promiseOne.then(function(){
//     console.log("promise consumed");
// })

//2 way of writing promises
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("async 2 resolved");
// })


//3 way of writing promises
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Kinjal",email:"shahkinjal@gmail.com"})
    },1000)

})
//.then takes the parameter from above resolve.
promiseThree.then(function(user){
    console.log(user);

})

//4 way of writing promise
const PromiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"kinjal",password:"1234"})
        }
        else{
            reject('ERROR:Something went wrong')
        }

    },1000)

})
PromiseFour.
then((user)=>{
    console.log(user);
    return user.username

}).
then((username)=>{
    console.log(username);
}).
catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("finally the promise is either resolved or rejected.")
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"kinjal",password:"1234"})
        }
        else{
            reject('ERROR:Something Missing')
        }
    },1000)


});
async function consumePromiseFive(){
   try{
    const response =  await promiseFive;
   console.log(response);
   }
   catch(error){
    console.log(error);
   }
}

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://api.github.com/users/KinjalShah10')
//         const data = await response.json()
//         console.log(data);
// }
// catch(error){
//     console.log("E:",error);
// }
// }
// getAllUsers()



//--------FETCH-------------
//fetch gets the resource from the network,returning a promise which is full filled once the response is available.
fetch('https://api.github.com/users/KinjalShah10')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))
//Promise:- error404 will be always as a response,it is error only when its not able to request the browser till then netork req does not know abt errors or error codes.

 