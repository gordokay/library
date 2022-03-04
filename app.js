const libraryContainer = document.querySelector('.library');
const newBtn = document.querySelector('.new-btn');
const addBtn = document.querySelector('.add-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const dialogModal = document.querySelector('dialog');

const authorForm = document.querySelector('#author');
const titleForm = document.querySelector('#title');
const isReadForm = document.querySelector('#isRead');

const library = [];

newBtn.addEventListener('click', () => {
    dialogModal.showModal();
})

cancelBtn.addEventListener('click', () => {
    dialogModal.close();
})

addBtn.addEventListener('click', () => {
    const author = authorForm.value;
    const title = titleForm.value;
    const isRead = isReadForm.checked;
    addBookToLibrary(author, title, isRead);
    dialogModal.close();
    authorForm.value = '';
    titleForm.value = '';
    isReadForm.checked = false;
})

function Book(author, title, isRead){
    this.author = author;
    this.title = title,
    this.isRead = isRead;
}

Book.prototype.toggleIsRead = function(){
    this.isRead = !this.isRead;
    console.log(`${this.title} is read: ${this.isRead}`);
}

function addBookToLibrary(author, title, isRead){
    const book = new Book(author, title, isRead);
    addBookToDisplay(book);
    library.push(book);
}

function addBookToDisplay(book){
    const {author, title, isRead} = book;

    const bookContainer = document.createElement('div');

    const titleText = document.createElement('h2');
    titleText.innerText = title;

    const authorText = document.createElement('h3');
    authorText.innerText = author;

    const isReadCheckbox = document.createElement('input');
    isReadCheckbox.setAttribute('type', 'checkbox');
    isReadCheckbox.checked = isRead;
    isReadCheckbox.addEventListener('click', () => {
        book.toggleIsRead();
    })

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        library.splice(library.indexOf(book), 1);
        while(bookContainer.firstChild){
            bookContainer.removeChild(bookContainer.firstChild);
        }
        bookContainer.remove();
    })
    
    bookContainer.appendChild(titleText);
    bookContainer.appendChild(authorText);
    bookContainer.appendChild(isReadCheckbox);
    bookContainer.appendChild(deleteButton);

    libraryContainer.appendChild(bookContainer);
}

addBookToLibrary("Bertrand Russell", "The Problems of Philosophy", false);
addBookToLibrary("Ernest Hemingway", "The Sun Also Rises", true);
addBookToLibrary("Joseph Heller", "Catch 22", true);