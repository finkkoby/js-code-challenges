/* 
When the button is clicked, use the filter method (and write a callback function for it) to filter the books array and create a new array named filteredBooks 
that contains only the books in the genre that the user entered - this should be case insensitive.
Then, call the renderBookList function with your new array.
*/

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian Fiction' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic Fiction' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic Fiction' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'To the Lighthouse', author: 'Virginia Woolf', genre: 'Modernist Fiction' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Classic Fiction' },
    { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction' },
    { title: 'The Odyssey', author: 'Homer', genre: 'Epic Poetry' },
  ];
  
document.addEventListener("DOMContentLoaded", () => {
    renderBookList(books)
})

function filterBooks(genre) {
    return books.filter(book => book['genre'] === genre)
}

function renderBookList(books) {
    const bookList = document.getElementById('book-list')
    bookList.innerHTML = ''

    books.forEach(book => {
        const li = document.createElement('li')
        li.innerText = `${book.title} by ${book.author} (${book.genre})`
        bookList.appendChild(li);
    });
}

let btn = document.getElementById('filter-button')
btn.addEventListener('click', (e) => {
    let inputText = document.querySelector('input#genre-input').value
    inputText = inputText[0].toUpperCase() + inputText.slice(1)
    let filteredBooks = filterBooks(inputText)
    renderBookList(filteredBooks)
})
  
