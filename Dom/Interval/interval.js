// setInterval has 3 parameter
// handler:- call back function
// time
// string or arguments or work to be done.

let intervalId
count = 0
const starting = (str) => {
    console.log(`${str} ${count++}`);
}

document.querySelector('#start').addEventListener('click', () =>  {
    intervalId = setInterval(starting, 1000, "Hello Kinjal Here")
})

document.querySelector('#stop').addEventListener('click', () =>  {
    clearInterval(intervalId)
})