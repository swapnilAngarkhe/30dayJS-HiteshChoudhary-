//this keyword
//task-7: use a method that uses this keyowrd and returnes name and year of the book.

let book1 = {
    author: " Maggie O'Farrell",
    name: "Hamnet",
    year: 2020
};

book1.getTitleYear = function() {
    return `${this.name} by ${this.year}`;
}
console.log(book1.getTitleYear());