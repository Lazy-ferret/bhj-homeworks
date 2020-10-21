'use strict';

const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
let index = sliderItems.findIndex(i => i.classList.contains('slider__item_active'));

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

arrowPrev.onclick = () => {
    sliderItems[index].classList.remove('slider__item_active');
    index = (index === 0) ? (sliderItems.length - 1) : (index - 1);
    sliderItems[index].classList.add('slider__item_active');
}

arrowNext.onclick = () => {
    sliderItems[index].classList.remove('slider__item_active');
    index = (index === sliderItems.length - 1) ? 0 : (index + 1);
    sliderItems[index].classList.add('slider__item_active');
}

