//Function parameters and default values
//task-7
    //function that takes 2 parms return product

function product(a,b=2){
    return a*b;
}
console.log(product(5,1));

//task-8
    //takes persons name and age returns greetings.
function greet(name, age){
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet('Niqqaballs', 25);