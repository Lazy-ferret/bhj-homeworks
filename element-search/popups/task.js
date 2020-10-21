'use strict';

const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClose = Array.from(document.getElementsByClassName('modal__close'));

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function () {
        this.closest('.modal_active').classList.remove('modal_active');
    }
}

const modalSuccess = document.getElementById('modal_success');

document.querySelector('.show-success').onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

