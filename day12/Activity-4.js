//A-4
//TASK-6:

function getBool(){
    Tf=Math.random() < 0.5;
    return Tf;
}


new Promise(function(resolve,reject){
    setTimeout(() => {
        getBool()
        oopsie=Tf
        if(!oopsie){
            resolve()
        }else{
            console.log('there was somthing wrong.')
            reject()
        }
        
    }, 2000);
}).then(function(){

    console.log('oopsie is set to false')

}).catch(function(){
    console.error(' oopsie is set to true')
})

//task-7:
async function unSolved(){
    try{
        getBool()
        console.log(Tf);
        if(Tf==true){
           console.log('Tf is true, this is not an error');
        }
   
    }catch{
        console.log('Tf is set to false, this is an error');
    }
    
}
unSolved();

