//comparision operator <> = ===

let a=20
let b=5
let c="20"

if(a>b){
    console.log(`a is greater than b ${a>b}`);
}

if(b>a){
    console.log(`b is greater than c ${b>a}`);
}

if(a==c){
    console.log(`a is equal to c  ${a==c}`);
}

if(a===c){
    console.log(`a is strictly equal to c ${a===c}`);
}else{
    console.log(`a is not equal to c because the datatype are different ${a===c}`);

}

if(a<=b){
    console.log(`a is less than or equal to c ${a<=c}`);
}else{
    console.log(`a is not less than or equal to c ${a<=c}`);
}

if (a>=c){
    console.log(`a is greater than or equal to c ${a>=c}`);
}
