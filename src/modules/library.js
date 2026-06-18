import { createBook } from "./book.js";

const books = [];

function addBook(author, title, pages, read = false) {
  const book = createBook(author, title, pages, read);
  books.push(book);
}

function removeBook(id) {
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
  }
}

function toggleBookRead(id) {
  const book = books.find((book) => book.id === id);

  if (book) {
    book.toggleRead();
  }
}

function getBooks() {
  return books;
}

export {
  addBook,
  removeBook,
  toggleBookRead,
  getBooks,
};