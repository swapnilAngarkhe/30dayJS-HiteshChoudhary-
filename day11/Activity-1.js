//A-1 TASK-1:

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('faster in bed');
        resolve()
    }, 2000);
}).then(function(){
    console.log('promise complete')
})

//task-2:
new Promise(function(resolve,reject){
    setTimeout(() => {
        oopsie=true
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
    console.log(' oopsie is set to true')
})
