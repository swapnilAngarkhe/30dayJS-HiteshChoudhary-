new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('faster in bed');
        resolve({username:'aadmi', naam:'kamlesh'})
    }, 2000);
}).then(function(obj){
    console.log(obj)
    return obj.username
}).then(function(user){
    console.log(user)
})