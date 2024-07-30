//TASK 4 and 5
//liner search

const LinSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
          return i;
        }
    }
    return -1;
};

console.log(LinSearch([2, 1, 4, 5, 3],2));
console.log(LinSearch([2, 1, 4, 5, 3],555));


//Binary search

function Bsearch(arr,target){

    let start=0;
    let end=arr.length-1;

    while(start<=end){
        let middle=Math.floor((start+end)/2)

        if(arr[middle]===target){
            return middle;
        }else if(arr[middle]<target){
            start = middle+1;
        }else{
            end =  middle-1;
        }
    }
    return -1;
}
console.log(Bsearch([3,2,1,5,4,3,8,5],5));
console.log(Bsearch([3,2,1,5,4,3,8,5],45));
