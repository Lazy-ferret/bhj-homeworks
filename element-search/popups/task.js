'use strict';

const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClose = Array.from(document.getElementsByClassName('modal__close'));

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }
}

const modalSuccess = document.getElementById('modal_success');

document.querySelector('.show-success').onclick = () => {
    modalSuccess.classList.add('modal_active');
}
