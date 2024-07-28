const arr = [1, 2, 3, 4, 5, 6];

function search(tar, start = 0, end = arr.length-1) {
    if (start>end) {
        return 'Not Found';
    } else {
        const middle = Math.floor((start+end)/2);
        if (arr[middle]===tar) {
            return `Found at: ${middle}`;
        }
        if (arr[middle]>tar) {
            return search(tar, start, middle-1);
        }
        if (arr[middle]<tar) {
            return search(tar, middle+1, end);
        }
    }
}

console.log(search(2));
console.log(search(3));
console.log(search(4));


function findOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  }

  const currentCount = arr[0] === target ? 1 : 0;
  return currentCount + findOccurrences(arr.slice(1), target);
}
const array1 = [1, 2, 3, 4, 2, 2, 5];
const array2 = [7, 8, 7, 9, 7, 10];
const array3 = [1, 1, 1, 1, 1, 1, 1];

console.log(findOccurrences(array1, 2)); 
console.log(findOccurrences(array2, 7)); 
console.log(findOccurrences(array3, 1)); 
console.log(findOccurrences(array3, 2)); 