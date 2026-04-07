//array to store books
let booksArray = []
//books constructor
function Book(author,title,pages,id){
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.id =crypto.randomUUID();
}
//separate function to the script (not inside the constructor) that
//  can take some arguments, create a book from those arguments, and
//  store the new book object into an array
function createBook(author,title,pages){
  const book=new Book(author,title,pages)
  booksArray.push(book)
}
createBook("John","success","10");
createBook("Mary","fail","100");
// console.log(booksArray)

//function that loops through the array 
// and displays each book on the page.
let libraryWrapper =document.getElementById("library");

for(let i=0;i<booksArray.length;i++){
  //create new div for each book
  let bookCard = document.createElement("div")
   bookCard.id="card"
  bookCard.innerHTML=`
   <h3>${booksArray[i].title}</h3>
   <p> Author: ${booksArray[i].author}</p>
   <p> Pages: ${booksArray[i].pages}</p>
   <p> Id: ${booksArray[i].id}</p>
   `
  //append bookcards to librayWrapper
  libraryWrapper.appendChild(bookCard)
}