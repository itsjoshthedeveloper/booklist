// Global UI variables
const UIcontainer = document.querySelector('.container');
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
  // Form listener
  UIbookForm.addEventListener('submit', addBook);
  // Delete task
  UIbookList.addEventListener('click', deleteBook);
}

// Add book
function addBook(e) {
  if (UItitle.value === '' || UIauthor.value === '' || UIisbn.value === '') {
    showMessage('Please fill all fields', 'error');
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
  tr.innerHTML = `<td>${book.getTitle()}</td><td>${book.getAuthor()}</td><td>${book.getISBN()}</td><td><a href="#" class="delete-item">X</a></td>`;
  UIbookList.appendChild(tr);
  showMessage(`Added '${book.getTitle()}'`, 'success');
}

// Delete book element
function deleteBook(e) {
  if (e.target.classList.contains('delete-item')) {
    // Get book element
    child = e.target.parentElement.parentElement;
    const bookName = String(child.firstChild.textContent);
    child.remove();
    showMessage(`Deleted '${bookName}'`, 'success');
  }
}

// Show message
function showMessage(msg, type) {
  // Create a div
  const div = document.createElement('div');
  div.className = type + ' alert';
  div.textContent = msg;

  // Insert div above heading
  UIcontainer.insertBefore(div, UIbookForm);

  // Clear message after 3 seconds
  setTimeout(clearMessage, 3000);
}

// Clear message
function clearMessage() {
  document.querySelector('.alert').remove();
}
