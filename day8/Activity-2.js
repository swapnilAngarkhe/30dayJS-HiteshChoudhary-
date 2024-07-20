//Destructring
//task-3: array destructering
let numlist=[1,2,3,4]
let[first,second]=numlist;
console.log(first,second);

//task-4:
//Object destructering
let book1 = {
    author: "Maggie O'Farrell",
    name: "Hamnet",
    year: 2020
};
let {author}=book1;
console.log(`The author of Hamnet is ${author}`);