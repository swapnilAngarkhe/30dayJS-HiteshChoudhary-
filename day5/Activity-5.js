//H Functions
//task-9
    // Heigher order function that takes a function and a number and calls the function that many times

function repeatIt(func,num){

    for(let i=0; i<num; i++){
        func();
    }
}
function nayan(){
    console.log('nyan :3');
}
repeatIt(nayan, 3);

//task-10
    // func that takes 2 func and a value and that value will be passed to those 2 taken funcitons

let func1 = (y) => y*2;
let func2 = (z) => z*3;
let Hfunc = (func1, func2, value) => func2(func1(value))+1;

back=Hfunc(func1, func2, 2);
console.log(back);
