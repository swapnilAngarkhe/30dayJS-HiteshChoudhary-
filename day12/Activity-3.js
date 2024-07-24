//A-3
//TASK-4: CUSTOM ERRORS

let rl=require('readline-sync')

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomErrors"
    }
}

try {
    throw new CustomError("This is a custom error")
}
catch (error) {
    console.log(error.message)
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