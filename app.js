// Global UI variables
const UIbookForm = document.querySelector('#book-form');
const UItitle = document.querySelector('#title');
const UIauthor = document.querySelector('#author');
const UIisbn = document.querySelector('#isbn');
const UIbookList = document.querySelector('#book-list');

// Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }
  getISBN() {
    return this.isbn;
  }
}

// Load all event listeners
loadEventListeners();
console.log('loaded all event listeners');
function loadEventListeners() {
  // // DOM load event
  // document.addEventListener('DOMContentLoaded', loadAllTasks);
  // Form listener
  UIbookForm.addEventListener('submit', addBook);
  // Delete task
  UIbookList.addEventListener('click', deleteBook);
}

// Add book
function addBook(e) {
  if (UItitle.value === '' || UIauthor.value === '' || UIisbn.value === '') {
    console.log('please fill all fields');
  } else {
    // Create new Book object
    book = new Book(UItitle.value, UIauthor.value, UIisbn.value);
    // Add new book element to table
    createBookElement(book);
    // Clear input form
    UItitle.value = '';
    UIauthor.value = '';
    UIisbn.value = '';
  }
  e.preventDefault();
}

// Create a new book element
function createBookElement(book) {
  const tr = document.createElement('tr');
  tr.innerHTML = `<th>${book.getTitle()}</th><th>${book.getAuthor()}</th><th>${book.getISBN()}</th><th><a href="#" class="delete-item">X</a></th>`;
  UIbookList.appendChild(tr);
  console.log(`added '${book.getTitle()}' to table`);
}

// Delete book
function deleteBook(e) {
  if (e.target.classList.contains('delete-item')) {
    // Delete book element
    child = e.target.parentElement.parentElement;
    const bookName = String(child.firstChild.textContent);
    child.remove();
    console.log(`deleted '${bookName}' from table`);
  }
}
