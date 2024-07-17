//Even odd script:
function odd_even(k){
    if(k/2==0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
odd_even(5);

//Square of script:
function squareOf(s){
    console.log(s*s)
}
squareOf(5);

//concatinate:
(function(){
    let a="Hello ";
    let b="World";
    let c=a+b;
    let d=a.concat(b);
    console.log(c)
    console.log(d)
    
})();

//Sum arrow function
let add=(a,b)=>console.log(a+b);
add(2,3);

//Hfunciton
function repeatIt(func,num){

    for(let i=0; i<num; i++){
        func();
    }
}
function nayan(){
    console.log('nyan :3');
}
repeatIt(nayan, 3);
