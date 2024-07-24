//A-3
//TASK-4: CUSTOM ERRORS

let rl=require('readline-sync')

try{
    let age= 1500;
    if(age>150){
        throw new ReferenceError('Invalid age')
    }else{
        console.log('your age is valid ',age);
    }
}catch(error){
    console.log(error.message);
}


//task-5:
try{
    naam= rl.question('bhai aapka naam?')
    if(naam==""){
        throw new ReferenceError('bhai naam toh bataya nahi aapne :(')
    }else{
        console.log(`aacha, ${naam} bhai kese ho?`)
    }
}catch(error){
    console.log(error.message)

}