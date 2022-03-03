const libraryContainer = document.querySelector('.library');
const library = [];

function Book(author, title, isRead){
    this.author = author;
    this.title = title,
    this.isRead = isRead;
}

function addBookToLibrary(author, title, isRead){
    const book = new Book(author, title, isRead);
    library.push(book);
}