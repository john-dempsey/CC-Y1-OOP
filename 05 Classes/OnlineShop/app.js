//=====================================================================================================================
// Online shop
//=====================================================================================================================
import Book from "./classes/Book.js";

let book1 = new Book(
    "Ulysses", 
    "Ulysses tells of the diverse events which befall Leopold Bloom and Stephen Dedalus in Dublin on 16 June 1904, during which Blooms voluptuous wife, Molly, commits adultery", 
    "978-1840226355", 
    736, 
    ["James Joyce"], 
    [
        "Fiction", 
        "Classics", 
        "Irish Literature"
    ], 
    "2010-01-15",
    3.50, 
    4.5, 
    [
        "The greatest twentieth century novel",
        "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, 16 June 1904",
        "Best taken in small doses"
    ]
);

let book2 = new Book(
    "The Great Gatsby", 
    'Generally considered to be F. Scott Fitzgerald\'s finest novel, The Great Gatsby is a consummate summary of the "roaring twenties", and a devastating expose of the "Jazz Age"', 
    "978-1853260414", 
    144, 
    ["F. Scott Fitzgerald"], 
    [
        "Fiction", 
        "Classics", 
        "American Literature"
    ], 
    "1992-05-05",
    3.50, 
    4.6, 
    [
        "A great story that has been cherished for years",
        "The editor's comments are useful for students of the novel",
        "The story evokes the shallow extravagance of the wealthy in 1920s America"
    ]
);

let book3 = new Book(
    "The Sound and the Fury", 
    "Ever since the first furore was created on its publication in 1929, The Sound and the Fury has been considered one of the key novels of this century", 
    "978-0099475019", 
    288, 
    ["William Faulkner"], 
    [
        "Fiction", 
        "Classics", 
        "American Literature"
    ], 
    "1995-01-19",
    3.50, 
    4.0, 
    [
        "Can great literature really be unintelligible?",
        "Very hard work!",
        "This book is a testament to Faulkner's immense shrewdness as a writer"
    ]
);

let products = [
    book1,
    book2,
    book3
];

for (let i = 0; i < products.length; i++) {
    let b = products[i];
    console.log(b.getDetails());
}
