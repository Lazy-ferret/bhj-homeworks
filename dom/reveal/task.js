'use strict';

const reveal = Array.from(document.querySelectorAll('.reveal'));

function getActive() {
    reveal.forEach(element => {
        element.getBoundingClientRect().top < window.innerHeight ? element.classList.add('reveal_active') : element.classList.remove('reveal_active');
    })
}

document.addEventListener('scroll', getActive);

