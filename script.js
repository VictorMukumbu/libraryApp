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
// createBook("John","success","10");
// createBook("Mary","fail","100");
// console.log(booksArray)

//