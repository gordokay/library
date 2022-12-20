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

class Book {
  constructor(title, author, pageNumber, isFinished) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.isFinished = isFinished;
  }
}

function addBookToLibrary() {
  const newBook = new Book(titleInput.value, authorInput.value, pageNumberInput.value, isFinishedInput.checked);
  library.push(newBook);
  return newBook;
}

function makeBook(book) {
  const newBook = document.createElement('div');
  newBook.classList.add('book');
  const title = document.createElement('h3');
  title.textContent = book.title;
  const author = document.createElement('p');
  author.textContent = book.author;
  const pageNumber = document.createElement('p');
  pageNumber.textContent = `${book.pageNumber} pages`;
  const isFinished = document.createElement('input');
  isFinished.setAttribute('type', 'checkbox');
  isFinished.checked = book.isFinished;
  isFinished.disabled = true;
  const isFinishedLabel = document.createElement('label');
  isFinishedLabel.textContent = 'finished';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.classList.add('delete-book');
  newBook.append(title, author, pageNumber, isFinished, isFinishedLabel, deleteButton);
  libraryContainer.appendChild(newBook);
  deleteButton.addEventListener('click', () => {
    deleteBookFromLibrary(book);
    deleteBookFromContainer(newBook);
  })
}

function deleteBookFromLibrary(book) {
  let indexToRemove = library.indexOf(book);
  library.splice(indexToRemove, 1);
}

function deleteBookFromContainer(book) {
  while(book.firstChild) {
    book.removeChild(book.firstChild);
  }
  libraryContainer.removeChild(book);
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