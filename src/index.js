import "./styles.css";

import { addBook } from "./modules/library.js";
import { renderBooks } from "./modules/ui.js";
import {
  setupValidation,
  showAllErrors,
  clearErrors,
} from "./modules/validation.js";

const newBookButton = document.getElementById("newBook");
const bookDialog = document.getElementById("bookDialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const bookForm = document.getElementById("bookForm");

setupValidation();

addBook("Victor Mukumbu", "Successful Developer", "150", true);

addBook("Mary Joseph", "Future of Engineering", "100", false);

renderBooks();

newBookButton.addEventListener("click", () => {
  bookDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  bookDialog.close();
});

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!bookForm.checkValidity()) {
    showAllErrors();
    return;
  }

  const author = document.getElementById("bookAuthor").value;

  const title = document.getElementById("bookTitle").value;

  const pages = document.getElementById("bookPages").value;

  addBook(author, title, pages);

  renderBooks();

  bookForm.reset();

  clearErrors();

  bookDialog.close();
});
