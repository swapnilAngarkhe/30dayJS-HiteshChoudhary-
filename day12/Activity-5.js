//A-5
//Task-8:
response=fetch('https://jsonplaceholder.tyeeeepicode.com/todos/1')
.then(function(response){

    if(response){
        console.log('data recived from api')
    const responseJson=response.json()
    console.log(responseJson)
    }else{
        console.log('in reject...')
        reject()
    }
    
}).catch(function(){
    console.log('Invalid URl')
})

//Task-9:
async function apiAsync(){

    try{
        const response = await fetch('https://jsonplaceholder.typdadsfasdficode.com/todos/1')
    const jsonData= await response.json()
    console.log(jsonData);
    }catch{
        console.error('Invalid url')
    }
    
}
apiAsync();