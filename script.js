// =======================
// Array to store books
// =======================
let booksArray = [];

// =======================
// DOM Elements
// =======================
const newBookButton = document.getElementById("newBook");
const bookDialog = document.getElementById("bookDialog");
const confirmBtn = document.getElementById("confirmBtn");
const libraryWrapper = document.getElementById("library");

// =======================
// Book Constructor
// =======================
function Book(author, title, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

// =======================
// Prototype Method
// =======================
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// =======================
// Create Book
// =======================
function createBook(author, title, pages, read = false) {
  const book = new Book(author, title, pages, read);
  booksArray.push(book);
}

// =======================
// Display Books
// =======================
function displayBooks() {
  libraryWrapper.innerHTML = "";

  for (let i = 0; i < booksArray.length; i++) {
    const book = booksArray[i];

    // CARD
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    // conditional styling
    bookCard.classList.add(book.read ? "read" : "not-read");

    // CONTENT
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("card-content");

    contentDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.read ? "Read" : "Not Read"}</p>
      <p>ID: ${book.id}</p>
    `;

    // ACTIONS
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("card-actions");

    // TOGGLE READ BUTTON
    const readStatusButton = document.createElement("button");
    readStatusButton.classList.add("toggleButton");
    readStatusButton.textContent = book.read
      ? "Mark as Unread"
      : "Mark as Read";

    readStatusButton.addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });

    // REMOVE BUTTON
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Remove Book";

    removeButton.addEventListener("click", () => {
      booksArray.splice(i, 1);
      displayBooks();
    });

    // APPEND ACTIONS
    actionsDiv.appendChild(readStatusButton);
    actionsDiv.appendChild(removeButton);

    // BUILD CARD
    bookCard.appendChild(contentDiv);
    bookCard.appendChild(actionsDiv);

    libraryWrapper.appendChild(bookCard);
  }
}

// =======================
// Initial Books
// =======================
createBook("Victor Mukumbu", "Successful Developer", "150", true);
createBook("Mary Joseph", "Future of Engineering", "100", false);
displayBooks();

// =======================
// Open Dialog
// =======================
newBookButton.addEventListener("click", () => {
  bookDialog.showModal();
});

// cancel button closes modal
const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.addEventListener("click", () => {
  bookDialog.close();
});

// =======================
// Add New Book
// =======================
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const author = document.getElementById("bookAuthor").value;
  const title = document.getElementById("bookTitle").value;
  const pages = document.getElementById("bookPages").value;

  if (title && author && pages) {
    createBook(author, title, pages, false);
    displayBooks();
    bookDialog.close();
  } else {
    alert("Please input book details");
  }
});