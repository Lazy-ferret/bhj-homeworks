'use strict';

const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));

function getRandom(min, max) {
    min = 0;
    max = Math.floor(rotatorCases.length - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getActiveRotator() {
    document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
    if (!document.querySelector('.rotator__case_active')) {
        rotatorCases[getRandom()].classList.add('rotator__case_active');
    }
}

window.setInterval(getActiveRotator, 1000);
