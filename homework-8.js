// 3.
const user = {
  first_name: "Nurislam",
  last_name: "Saliev",
  age: 23,
  occupation: "student",
  rel_status: "single",
  city: "San Francisco",
  country: "USA",
  email: "saliev.ns01@gmail.com",
  phone_num: 4156057511
}

// 4.
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2009,
  color: "grey",
  transmission: "auto",
  owner: {}
}

// 5.
function isMaxSpeedPresent(object) {
  if (!object.maxSpeed) {
    object.maxSpeed = 260;
    console.log(car.owner);
  }
}

isMaxSpeedPresent(car.owner);

// 6. 
function getObjectValue(object, property) {
  return Object.getObjectValue(object.property);
}

// 7.
const products = ["shampoo", "body wash", "hand soap"];


// 8.
const books_1 = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    coverColor: "green",
    genre: "fantasy"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 2000,
    coverColor: "orange",
    genre: "science fiction"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    coverColor: "blue",
    genre: "romance"
  },
]

books_1.push({
  title: "The Da Vinci Code",
  author: "Dan Brown",
  year: 2003,
  coverColor: "black",
  genre: "mystery thriller"
})

// 9.


const books_2 = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    coverColor: "green",
    genre: "fantasy",
    universe: "Middle-Earth"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    coverColor: "orange",
    genre: "science fiction",
    universe: "Dune"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 2000,
    coverColor: "blue",
    genre: "romance",
    universe: "Austen"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    year: 2003,
    coverColor: "black",
    genre: "mystery thriller",
    universe: "Brown"
  }
];

const updatedBooks = [...books_1, ...books_2];


// 10.
function getRareBooks(array) {
  return array.map((book) => { book.isRare = book.year >= 2000; return book });
}

getRareBooks(updatedBooks);

console.log(updatedBooks);