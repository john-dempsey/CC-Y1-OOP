let book = {
    title: "Javascript for Beginners",
    isbn: "978-1234-56789-0",
    pageCount: 234,
    authors:["Joe Bloggs", "Mary Keogh"],
    genres: ["Computing", "Programming"],
    publishedDate: "2022-01-02",
    price: 23.56,
    rating: 5,
    reviews: [
        {
            "author": "Jim Kowalski",
            "content": "This is a great book"
        },
        {
            "author": "Jane Carroll",
            "content": "This is a good book"
        },
        {
            "author": "Helen Fernandez",
            "content": "This is my fdvourite book"
        }
    ],
    getDetails() {
        return `Title: ${this.title}, author: ${this.author}, price: ${this.price}`;
    }
}

let book2 = {
    title: "Advanced Javascript",
    isbn: "978-1234-567-987",
    pageCount: 524,
    authors:["Mary Bloggs", "Juan Fernandez"],
    genres: ["Computing", "Programming"],
    publishedDate: "2019-01-02",
    price: 63.56,
    rating: 5,
    reviews: [],
    getDetails() {
        return `Title: ${this.title}, author: ${this.author}, price: ${this.price}`;
    }
}

let book3 = {
    title: "Advanced CSS",
    isbn: "978-1234-5612-34",
    pageCount: 524,
    authors:["Klara Schmidt", "Juan Hughes"],
    genres: ["Computing", "Web design"],
    publishedDate: "2018-07-12",
    price: 17.56,
    rating: 5,
    reviews: [],
    getDetails() {
        return `Title: ${this.title}, author: ${this.author}, price: ${this.price}`;
    }
}

let products = [
    book,
    book2,
    book3
];

for (let i = 0; i != products.length; i++) {
    let bk = books[i];
    console.log(bk.getDetails());
}