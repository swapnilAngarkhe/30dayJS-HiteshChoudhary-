//A-5
//TASK-8:
const fetch1=fetch('https://www.youtube.com/watch?v=SyL1thdXmlE')
const fetch2=fetch('https://jsonplaceholder.typicode.com/posts')

Promise.all([fetch1, fetch2]).then(function(values){
    console.log(values)
});

//Task-9:

const resolvePromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('resolved')
        },1000);
    });
};

const rejectPromise=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('rejected');
        },5000);
    })
}
Promise.race([
    resolvePromise(),
    rejectPromise()
]).then(result =>{
    console.log("result:", result)
}).catch(error=>{
    console.log('error: ',error);
})