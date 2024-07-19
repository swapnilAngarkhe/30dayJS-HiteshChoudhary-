//Nested obj
//task-5: nested obj with array, and log it

let Library = {
    name: "Dead poets socitey",
    books:[
        {
            title: "After you'd go",
            author: "Maggie O'Farrell",
            year: 2000
        },
        {
            title:"The Bell jar",
            author: "Sylvia Plath",
            year: 1963
        },
        {
            title: "This Must Be the Place",
            author: "Maggie O'Farrell",
            year: 2016
        }
    ]
};

console.log(Library);

//task-6: Access and log the name of the library and the titles of all the books in the library
console.log(Library.name);
Library.books.forEach(book => {
    console.log(book.title);
});