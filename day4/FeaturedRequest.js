//Featured Request:

// Number printing scirpt 
for(i=1;i<=10;i++){
    console.log(i);

}

//Multiplication table script
for(i=1;i<=10;i++){
    console.log(i*5);
}

//pattern printing
let st=5;
for(i=1;i<=st;i++){
    let str='';
    for(j=1;j<=i;j++){
        str+='*';
    }
    console.log(str);
} 

//Factorial
let fact=1;
let number=5;

do{
    fact*=number;
    number--;
    }while(number>0)
        console.log(fact);

