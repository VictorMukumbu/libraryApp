import "./styles.css";
import { addBook } from "./modules/library.js";
import { renderBooks } from "./modules/ui.js";

const newBookButton = document.getElementById("newBook");
const bookDialog = document.getElementById("bookDialog");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

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

  const author = document.getElementById("bookAuthor").value;
  const title = document.getElementById("bookTitle").value;
  const pages = document.getElementById("bookPages").value;

  if (!author || !title || !pages) {
    alert("Please input book details");
    return;
  }

  addBook(author, title, pages);
  renderBooks();
  bookDialog.close();
});
