// TASK-7 AND 8
function memoize(fun){

    const cache = {};

    return function(arg){
        if(cache[arg] !== undefined){
            return cache[arg];
        }

        const result = fun(arg);
        cache[arg] = result;
        return result;
    }
}

function square(num){
    return `Square of number ${num} is: ${num*num}`;
}

const memozied_square = memoize(square);
console.log('computed',memozied_square(4));
console.log('memozied',memozied_square(4));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoized_fact = memoize(factorial);

console.log("Factorial is: ",memoized_fact(5));