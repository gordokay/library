const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageNumberInput = document.getElementById('page-number');
const isFinishedInput = document.getElementById('is-finished');
const addBookButton = document.querySelector('.add-book');
const closeDialogButton = document.querySelector('.close-dialog');
const libraryContainer = document.querySelector('.library');

const library = [];

function Book(title, author, pageNumber, isFinished) {
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.isFinished = isFinished;
}

Book.booksCreated = 0;

function addBookToLibrary() {
  const newBook = new Book(titleInput.value, authorInput.value, pageNumberInput.value, isFinishedInput.checked);
  Book.booksCreated++;
  newBook.id = Book.booksCreated;
  library.push(newBook);
  return newBook;
}

function makeBook(book) {
  const newBook = document.createElement('div');
  newBook.setAttribute('data-id', book.id);
  const title = document.createElement('h3');
  title.textContent = book.title;
  const author = document.createElement('p');
  author.textContent = book.author;
  const pageNumber = document.createElement('p');
  pageNumber.textContent = book.pageNumber;
  const isFinished = document.createElement('input');
  isFinished.setAttribute('type', 'checkbox');
  isFinished.checked = book.isFinished;
  isFinished.disabled = true;
  newBook.append(title, author, pageNumber, isFinished);
  libraryContainer.appendChild(newBook);
}

function clearForm() {
  [titleInput, authorInput, pageNumberInput].forEach(input => input.value = '');
  isFinishedInput.checked = false;
}

addBookButton.addEventListener('click', () => {
  dialog.showModal();
})

closeDialogButton.addEventListener('click', () => {
  dialog.close();
  clearForm();
})

form.addEventListener('submit', () => {
  makeBook(addBookToLibrary());
  clearForm();
})