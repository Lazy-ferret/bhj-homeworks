'use strict';

const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
const tabNavigation = document.querySelector('.tab__navigation')

function getActive(event) {
    tabs.forEach(elem => {
        elem.classList.remove('tab_active');
        event.target.classList.add('tab_active');

    });
    tabContent.forEach(elem => {
        elem.classList.remove('tab__content_active');
        tabContent[tabs.indexOf(event.target)].classList.add('tab__content_active');
    });
}

tabNavigation.addEventListener('click', getActive);
