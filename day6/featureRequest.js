// Featred Request

let Books=["hamnet", "Harry Potter", "Bell Jar",]
console.log(Books)
Books.push("Wise and otherwise")
console.log(Books);

    //remove using pop method

Books.pop();
console.log(Books);

    //shift method for first element
Books.shift()
console.log(Books);


    //unshift to add 
Books.unshift("hamnet")
console.log(Books);


let num=[1,2,3,4,5]
let doubled=num.map((element)=>{
    return element+element
})
console.log(doubled)


    // use filter method, even number

let filterThis=[1,2,3,4,5,6,7,8];
let filtered=filterThis.filter((element)=>{
    return element%2==0
})
console.log(filtered)

    // reduce method
    //this will take 2 elements each itration and add em up till end of the array.
let reduceThis=[1,2,3,4,5,6,7,8];
let reduced=reduceThis.reduce((a,b)=>{
    return a+b
})
console.log(reduced)

let itrateme = ['samosa', 10, 'dhaba']
for(let i=0; i<itrateme.length; i++){
    console.log(itrateme[i])
}

    //itrate using for each loop
let itrateeach=['samosa',15,'dhaba']
itrateeach.forEach((element)=>{
    console.log(element)
})

let twoD=[[1,2,3,4],[5,6,7,8],[9,10]]
console.log(twoD)

//access specific element in 2d array.
console.log(twoD[0][3])

twoD.push([11,12])
console.log(twoD)