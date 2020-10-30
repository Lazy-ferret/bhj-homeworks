'use strict';

const interestsMain = document.querySelector('.interests_main');

function getChecked(event) {
    const checkList = Array.from(event.target.closest('.interest').querySelectorAll('.interest__check'));
    checkList.forEach(element => {
        event.target.checked ? element.checked = true : element.checked = false;
    });
}

interestsMain.addEventListener('click', getChecked);