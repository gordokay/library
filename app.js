const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pageNumberInput = document.getElementById('page-number');
const isFinishedInput = document.getElementById('is-finished');
const addBookButton = document.querySelector('.add-book');
const closeDialogButton = document.querySelector('.close-dialog');

const library = document.querySelector('.library');

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
  clearForm();
})