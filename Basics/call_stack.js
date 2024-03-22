// javascript execution context means hoe the code is execyted or run inside the js

//{}:Global Execution context : this
//excuted as a single threaded everything is a process.

//1 global execution context
//2 function execution conext
//3 eval execution context usually the property of global

//runs in 2 phases:
//1 memory creation phase or creation phase means sirf memory is allocated to the variables.
//2 execution phase means operions on variables are done on this phase.

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)

//Steps:
//1 global execution and allocated inside this

//2 memory phase and variables are stored
//val1 -> undefined
//val2 -> undefined
//addNum ->definition till line 19

//result1 ->undefined
//result2 -> undefined

//3 execution phase
//val1 <-10
//val2 <-5
//addNum -> make different executional context
//           new variable + execution thread
//now again the memory and execution phase will take place bcz of the function.

//val1 -> undefined
//val2 -> undefined
//total -> undefined

//execution num1->10
//num2 ->5
//total -> 15
//after the global execution is done then it gets deleted.

//result2 -> again same as result1

//---------CALL STACK----------
//work as a stack data structure.
//lifo concept last in first out.
