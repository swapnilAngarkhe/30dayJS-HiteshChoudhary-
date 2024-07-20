//Enhanced Obj litrals
//task-8: create an obj with enhance obj litrlas with methods and properties and log it

let book1 = {
    author: "Maggie O'Farrell",
    name: "Hamnet",
    year: 2020,
    summary: function() {
        return `${this.name} is a great book by ${this.author}.`;
    }
};
console.log(book1);

//task-9: an obj with computed propertey name based on variables and log it
let prop1 = "age";
let prop2 = "occupation";

let bruhh2047={
    prop1,
    prop2, 
}
console.log(bruhh2047);