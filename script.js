// Array to store books
let booksArray = []

const newBookButton = document.getElementById("newBook");
const bookDialog = document.getElementById("bookDialog");
const confirmBtn = document.getElementById("confirmBtn");
const libraryWrapper = document.getElementById("library");

// Book constructor
function Book(author, title, pages, id) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

// Function to create a new book and store it in the array
function createBook(author, title, pages) {
  const book = new Book(author, title, pages);
  booksArray.push(book);
}

// Function to display all books on the page
function displayBooks() {
  libraryWrapper.innerHTML = ''; // Clear the library display first
  for (let i = 0; i < booksArray.length; i++) {
    let bookCard = document.createElement("div");
    bookCard.id = "card";
    bookCard.innerHTML = `
      <h3>${booksArray[i].title}</h3>
      <p> Author: ${booksArray[i].author}</p>
      <p> Pages: ${booksArray[i].pages}</p>
      <p> Id: ${booksArray[i].id}</p>
    `;
    libraryWrapper.appendChild(bookCard);
  }
}

// Create initial books (for testing purposes)
createBook("John", "success", "10");
createBook("Mary", "fail", "100");
displayBooks();

// "New Book" button to bring up the form allowing users to input book details
newBookButton.addEventListener("click", () => {
  bookDialog.showModal();
});

// Confirm button to add the book
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get values from the input fields
  const author = document.getElementById("bookAuthor").value;
  const title = document.getElementById("bookTitle").value;
  const pages = document.getElementById("bookPages").value;

  // Validate inputs and create a new book if all fields are filled
  if (title && author && pages) {
    createBook(author, title, pages); // Add the new book
    displayBooks(); // Refresh the displayed book list
    bookDialog.close(); // Close the dialog
  } else {
    alert("Please input book details");
  }
});