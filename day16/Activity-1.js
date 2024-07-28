// TASK-1 and TASK-2

function fact(n){
    if(n===0){
        return 1;
    }
    return n * fact(n-1);
}

console.log(fact(5));
console.log(fact(6));
console.log(fact(2));

function febo(n){
    if(n<=1){
        return n;
    }else{
        return febo(n-1) + febo(n-2);
    }
}

console.log(febo(20));
console.log(febo(10));
console.log(febo(11));