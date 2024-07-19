//Obj Methods
//task-3: add method to the book obj that returns string with book title and author

let book1 = {
    author: " Maggie O'Farrell",
    name: "Hamnet",
    year: 2020
};

book1.getDetails = function() {
    return `${this.name} by ${this.author}`;
}
console.log(book1.getDetails());


//task-4:method that takes a param of year, and update it.
book1.updateYear=function(newyear){
    book1.year=newyear;
}
book1.updateYear(2021)
console.log(book1.year);


