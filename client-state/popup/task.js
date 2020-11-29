'use strict';
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

const getCookie = () => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + "modalClosed" + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

if (getCookie() !== 'true') {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClosed=true';
})


