//TASK-3 and TASK-4

function sumAlll(arr){
    if(arr.length <=0){
        return 0;
    }else{
        return arr[0] + sumAlll(arr.slice(1));
    }
}

console.log(sumAlll([1,2,3,4,5]))
console.log(sumAlll([1,8,6,4,5]))
console.log(sumAlll([1,1,7,2,5]))


function maxAll(arr){
    if(arr.length<=1){
        return arr[0]
    }else{
        const maxNum=maxAll(arr.slice(1));
        return maxNum < arr[0] ? arr[0] : maxNum;
    }
}

console.log(maxAll([1,2,3,4,5]))
console.log(maxAll([1,8,6,4,5]))
console.log(maxAll([1,1,7,2,5]))

