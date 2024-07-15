//nested if else
    // largest among 3 

let p=10;
let q=20;  
let r=30;

if(p>q){
    if(p>r){
        console.log(`p ${p} is largest`);
    }else{
        console.log(`r ${r} is largest`);
    }
}else{
    if(q>r){
        console.log(`q ${q} is largest`);
    }else{
        console.log(`r ${r} is largest`);
    }
}