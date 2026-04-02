const myLibrary = [];

// Constructor function for creating books
function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID(); // Unique ID for each book
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Function to add a new book to the library
function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

// Function to display the books on the page
function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; // Clear the library before re-rendering

  myLibrary.forEach((book) => {
    // Create a card for each book
    const card = document.createElement("div");
    card.classList.add("book-card");

    // Add content to the card
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.isRead ? "Read" : "Not Read"}</p>
    `;

    // Append the card to the library container
    libraryDiv.appendChild(card);
  });
}

// Add some sample books to the library
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Atomic Habits", "James Clear", 320, true);

// Initial render of books
displayLibrary();