// data/data.js

let books = [
  { id: 1, title: "1984", author: "George Orwell", year: 1949, categoryId: 1 },
  { id: 2, title: "Banana Hash", author: "Tahar Ben Jelloun", year: 1992,categoryId:2},
  {id: 3, title: "Morocco: A Biography", author: "Susan Gilson Miller", year: 2019,categoryId:3},
  {id: 4, title: "The Caliph's House: A Year in Casablanca", author: "Tariq Ali", year: 2006,categoryId: 4 },
];

let categories = [
  { id: 1, name: "Novels" },
  { id: 2, name: "Science" },
  { id: 3, name: "History" },
];

let comments = [{ id: 1, bookId: 1, text: "Great book!" }];

module.exports = { categories, books, comments };
