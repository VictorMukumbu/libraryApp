import {
  getBooks,
  removeBook,
  toggleBookRead,
} from "./library.js";

const libraryWrapper = document.getElementById("library");

function renderBooks() {
  libraryWrapper.innerHTML = "";

  getBooks().forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(book.read ? "read" : "not-read");

    const content = document.createElement("div");
    content.classList.add("card-content");

    content.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.read ? "Read" : "Not Read"}</p>
    `;

    const actions = document.createElement("div");
    actions.classList.add("card-actions");

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = book.read
      ? "Mark as Unread"
      : "Mark as Read";

    toggleBtn.addEventListener("click", () => {
      toggleBookRead(book.id);
      renderBooks();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Book";

    removeBtn.addEventListener("click", () => {
      removeBook(book.id);
      renderBooks();
    });

    actions.append(toggleBtn, removeBtn);
    card.append(content, actions);

    libraryWrapper.appendChild(card);
  });
}

export { renderBooks };