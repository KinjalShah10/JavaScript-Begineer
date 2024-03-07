// const coding = ["js","ruby","python","cpp"]

// const values = coding.forEach((item) => {
//     //console.log(item); 
//     return item //need to return it manually,but also it will return it undefined.

// })
// console.log(values); //will return one last value as a undefined.

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 5)
console.log(newNums);