'use strict';

const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

function choseItem() {
    for (let i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].onclick = function () {
            dropdownValue.textContent = dropdownItems[i].textContent;
            dropdownItems[i].closest('.dropdown__list_active').classList.toggle('dropdown__list_active');
            return false;
        }
    }
}

function getDropdown() {
    dropdownList.forEach(elem => elem.classList.toggle('dropdown__list_active'));
    choseItem();
}

dropdownValue.addEventListener('click', getDropdown)