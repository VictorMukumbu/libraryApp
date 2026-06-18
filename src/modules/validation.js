const titleInput = document.getElementById("bookTitle");
const authorInput = document.getElementById("bookAuthor");
const pagesInput = document.getElementById("bookPages");

const titleError = document.getElementById("bookTitleError");
const authorError = document.getElementById("bookAuthorError");
const pagesError = document.getElementById("bookPagesError");

function validateTitle() {
  if (titleInput.validity.valueMissing) {
    titleError.textContent = "Please enter a book title.";
  } else if (titleInput.validity.tooShort) {
    titleError.textContent = "Book title must contain at least 2 characters.";
  } else {
    titleError.textContent = "";
  }
}

function validateAuthor() {
  if (authorInput.validity.valueMissing) {
    authorError.textContent = "Please enter the author's name.";
  } else if (authorInput.validity.tooShort) {
    authorError.textContent = "Author name must contain at least 2 characters.";
  } else {
    authorError.textContent = "";
  }
}

function validatePages() {
  if (pagesInput.validity.valueMissing) {
    pagesError.textContent = "Please enter the number of pages.";
  } else if (pagesInput.validity.rangeUnderflow) {
    pagesError.textContent = "Pages must be greater than 0.";
  } else {
    pagesError.textContent = "";
  }
}

export function showAllErrors() {
  validateTitle();
  validateAuthor();
  validatePages();
}

export function clearErrors() {
  titleError.textContent = "";
  authorError.textContent = "";
  pagesError.textContent = "";
}

export function setupValidation() {
  titleInput.addEventListener("input", validateTitle);

  authorInput.addEventListener("input", validateAuthor);

  pagesInput.addEventListener("input", validatePages);
}
