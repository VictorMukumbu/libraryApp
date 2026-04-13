# 📚 Library App

A simple and interactive **Library Management Web App** built with vanilla JavaScript, HTML, and CSS.
Users can add books, mark them as read/unread, and remove them dynamically.

---

## 🚀 Features

* 📖 Add new books via a modal form
* 🔁 Toggle read/unread status
* ❌ Remove books from the library
* 🎨 Clean, minimal, responsive UI
* 🧠 Uses JavaScript objects and prototypes
* ⚡ Instant UI updates without page reload

---

## 🧱 Technologies Used

* HTML5
* CSS3 (Flexbox & Grid)
* JavaScript (ES6+)

---

## 📂 Project Structure

```
📁 library-app
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧠 How It Works

### Book Object

Each book is created using a constructor function:

```js
function Book(author, title, pages, read = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}
```

---

### Prototype Method

Books share a method to toggle their read status:

```js
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
```

---

### Rendering the UI

Books are stored in an array and rendered dynamically:

* The UI is cleared and rebuilt using `displayBooks()`
* Each book is displayed as a card
* Buttons are attached to each card for interaction

---

## 🖥️ Usage

### 1. Open the app

Simply open `index.html` in your browser.

---

### 2. Add a Book

* Click **"New Book"**
* Fill in the form
* Click **Confirm**

---

### 3. Manage Books

* Click **"Mark as Read / Unread"** to toggle status
* Click **"Remove Book"** to delete a book

---

## 🎨 UI Features

* Responsive grid layout
* Minimal modal dialog form
* Visual indicators for read/unread status
* Clean button alignment and spacing

---

## 🔮 Future Improvements

* 💾 Save books using `localStorage`
* 🔍 Search and filter books
* ✏️ Edit book details
* 🌙 Dark mode toggle
* 🎬 Add animations for better UX

---

## 📌 Notes

* This project uses the native `<dialog>` element for modals
* Book IDs are generated using `crypto.randomUUID()`

---

## 👨‍💻 Author

Built as a learning project to practice:

* DOM manipulation
* Object-oriented JavaScript
* UI design fundamentals

---

## 📜 License

This project is open source and free to use.
