const myLibrary = [];

function Book(author,title,pages,id,publisher) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.publisher = publisher;
    return
  // the constructor...
}

function addBookToLibrary(author,title,pages,id,publisher) {
    let book = new Book(author,title,pages,id,publisher)
    myLibrary.push(book)
    return
  // take params, create a book then store it in the array
  bookList.appendChild(li)
}
function displayBooks(){
  const libraryDiv =document.getElementById("library")
  libraryDiv.textContent =""

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <h3>book title: ${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
    `;

    libraryDiv.appendChild(card);
  });
}
addBookToLibrary("john","first",23,"london")
console.log(myLibrary)
displayBooks()



//adding a random code today
// Function to generate a random integer between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to pick a random item from an array
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Sample data arrays
const names = ["Alex", "Jordan", "Taylor", "Morgan", "Casey"];
const hobbies = ["gaming", "reading", "coding", "hiking", "music"];
const countries = ["USA", "Canada", "Germany", "Japan", "Brazil"];

// Function to generate a random user object
function generateRandomUser() {
    return {
        id: getRandomNumber(1000, 9999), // Unique random ID
        name: getRandomItem(names),      // Random name
        age: getRandomNumber(18, 60),    // Random age
        hobby: getRandomItem(hobbies),   // Random hobby
        country: getRandomItem(countries), // Random country
        isActive: Math.random() > 0.5    // Random boolean
    };
}

// Generate multiple random users
const users = [];
for (let i = 0; i < 5; i++) {
    users.push(generateRandomUser());
}

// Print the generated users
console.log("Generated Users:", users);

// Extra: filter active users
const activeUsers = users.filter(user => user.isActive);
console.log("Active Users:", activeUsers);

// Extra: sort users by age
users.sort((a, b) => a.age - b.age);
console.log("Users sorted by age:", users);