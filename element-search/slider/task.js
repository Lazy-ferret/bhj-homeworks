'use strict';

const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
let index = 0;

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

arrowPrev.onclick = () => {
    sliderItems[index].classList.remove('slider__item_active');
    if (index === 0) {
        index = sliderItems.length - 1;
    } else {
        index--;
    }
    sliderItems[index].classList.add('slider__item_active');
}

arrowNext.onclick = () => {
    sliderItems[index].classList.remove('slider__item_active');
    if (index === sliderItems.length - 1) {
        index = 0;
    } else {
        index++;
    }
    sliderItems[index].classList.add('slider__item_active');
}

