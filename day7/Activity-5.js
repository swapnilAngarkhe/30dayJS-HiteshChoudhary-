//obj itration
//task-8: user a for in loop to itrate over the properties of the obj and log each value
//task-9:use object.keys and objects.value to log all keys and values of the book.


const books=
            {
                title: "After you'd go",
                author: "Maggie O'Farrell",
                year: 2000
            }

for (const property in books) {
    console.log(`${property}: ${books[property]}`);
}
console.log(Object.keys(books));
console.log(Object.values(books));
       