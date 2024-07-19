let book1 = {
    author: " Maggie O'Farrell",
    name: "Hamnet",
    year: 2020,
    updatedYear: function (year) {
        this.year = year;
      }
};
console.log(book1);
book1.updatedYear(2030);



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
       


