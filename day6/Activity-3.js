//Array Methods-2
// task-7 
    //map method
    //map is similar to for each but used for creating new array

let num=[1,2,3,4,5]
let doubled=num.map((element)=>{
    return element+element
})
console.log(doubled)

//task-8
    // use filter method, even number

let filterThis=[1,2,3,4,5,6,7,8];
let filtered=filterThis.filter((element)=>{
    return element%2==0
})
console.log(filtered)

//task-9
    // reduce method
    //this will take 2 elements each itration and add em up till end of the array.
let reduceThis=[1,2,3,4,5,6,7,8];
let reduced=reduceThis.reduce((a,b)=>{
    return a+b
})
console.log(reduced)