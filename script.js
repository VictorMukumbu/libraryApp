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
const cancelBtn = document.getElementById("cancelBtn");

// =======================
// Book Class
// =======================
class Book {

  constructor(author, title, pages, read = false){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    }

    toggleRead () {
      this.read = !this.read;
    }

}

class Library{
  constructor(booksArray,libraryWrapper){
    this.booksArray =booksArray
    this.libraryWrapper =libraryWrapper
  }

  createBook(author, title, pages, read = false) {
    const book = new Book(author, title, pages, read);
    this.booksArray.push(book);
  }

  displayBooks() {
      this.libraryWrapper.innerHTML = "";

      for (let i = 0; i < this.booksArray.length; i++) {
        const book = this.booksArray[i];

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
          this.displayBooks();
        });

        // REMOVE BUTTON
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "Remove Book";

        removeButton.addEventListener("click", () => {
          this.booksArray.splice(i, 1);
          this.displayBooks();
        });

        // APPEND ACTIONS
        actionsDiv.appendChild(readStatusButton);
        actionsDiv.appendChild(removeButton);

        // BUILD CARD
        bookCard.appendChild(contentDiv);
        bookCard.appendChild(actionsDiv);

        this.libraryWrapper.appendChild(bookCard);
      }
    }
}

// initialize library
const library = new Library(booksArray,libraryWrapper)

// initial books
library.createBook("Victor Mukumbu", "Successful Developer", "150", true);
library.createBook("Mary Joseph", "Future of Engineering", "100", false);
library.displayBooks();

// =======================
// Open Dialog
// =======================
newBookButton.addEventListener("click", () => {
  bookDialog.showModal();
});


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
    library.createBook(author, title, pages, false);
    library.displayBooks();
    bookDialog.close();
  } else {
    alert("Please input book details");
  }
});

// let book1 =new Book("Victor Mukumbu", "Successful Developer", "150", true);
// console.log(book1.author)
// let book2= new Book("Mary Joseph", "Future of Engineering", "100", false);
// console.log(book2.pages)
// console.log(booksArray)
// displayBooks();