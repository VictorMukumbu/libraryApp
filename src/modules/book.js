export function  createBook(author, title, pages, read = false){
   return {
    author,
    title,
    pages,
    read,
    id : crypto.randomUUID(),
    

    toggleRead () {
      this.read = !this.read;
    },
};
}