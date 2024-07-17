//Arrow Functions
// task-5
    //arrow function for sum of 2 numbers

let add=(a,b)=>console.log(a+b);
add(2,3);

// task-6
    //arrow function to check if a string contains a specific char and return a boolen 

let stringCheck = (W)=> {
    if (W.includes('a')) {
        return true;
    } else {
        return false;
    }
}
console.log(stringCheck('HaallO'));