//TASKS 8 and 9
//Rotate Arry

function rotateArr(arr,k){
    let size=arr.length;
    if(size>k){
        k%=size;
    }
    const rotated = arr.splice(size-k,size);
    arr.unshift(...rotated)
    return arr;
}
console.log(rotateArr([1,2,3,4,5,6],3));

// sort + merge arr
function newArr(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log(mergedArray);
    return mergedArray;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
newArr(arr1, arr2);