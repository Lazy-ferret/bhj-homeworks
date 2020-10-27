'use strict';

const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

function getChangeFontSize(event) {
    book.querySelector('.font-size_active').classList.remove('font-size_active');
    event.preventDefault();
    this.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');
    if (this.dataset.size) {
        this.dataset.size == "small" ? book.classList.add('book_fs-small') : book.classList.add('book_fs-big');
    }
}

fontSize.forEach(element => {
    element.addEventListener('click', getChangeFontSize)
})

