let book1 = {
    author: " Maggie O'Farrell",
    name: "Hamnet",
    year: 2020
};
console.log(book1);
book1.getDetails = function() {
    return `${this.name} by ${this.author}`;
}
console.log(book1.getDetails());


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

for (const property in book1) {
    console.log(`${property}: ${book1[property]}`);
}
console.log(Object.keys(book1));
console.log(Object.values(book1));



