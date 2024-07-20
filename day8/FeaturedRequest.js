let personName = "John";
let personAge = 30;
console.log(`My name is ${personName} and I am ${personAge} years old.`);

let multilineString = 
`Should ${personName} eat samosa today?
No he shouldnt he on a diet.
But bro I tryna bulk ;-; .`

console.log(multilineString);

let numlist=[1,2,3,4]
let[first,second]=numlist;
console.log(first,second);

const arr1 = [1, 2, 3];
const newar=[...arr1,4,5,6]
console.log(newar);

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));



function product(a, b = 1) {
    return a * b;
}
console.log(product(5));


let book1 = {
    author: "Maggie O'Farrell",
    name: "Hamnet",
    year: 2020,
    summary: function() {
        return `${this.name} is a great book by ${this.author}.`;
    }
};
console.log(book1);
