const arr = [1,2,3];

// const initialValue = 0;
// const sumWithInitial = arr.reduce(
//     (accumulator,currentValue)  => accumulator +currentValue,
//     initialValue
// );

//currentvalue = array value
//accumulator = initailvalue +current value
//initailvalue = start from 0

const myTotal=arr.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`)
    return acc+currval
},0)

//const myTotal = arr.reduce ( (acc,curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart =[
    {
    itemName : "Javascript",
    price:999,
},
    {
    itemName : "Java",
    price:999,
},
    {
    itemName : "Python",
    price:999,
}
]

const priceToPay=shoppingCart.reduce( (acc,item) => acc + item.price,0 )
console.log(priceToPay);