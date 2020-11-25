'use strict';

const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

function showTooltip(event) {
    if (event.target.contains(document.querySelector('.tooltip_active'))) {
        tooltip.classList.remove('tooltip_active');
    } else {
        tooltip.classList.add('tooltip_active');
        tooltip.innerText = event.target.title;
        event.target.appendChild(tooltip);
        tooltip.style.left = `${event.target.getBoundingClientRect().left}px`;
    }
}

hasTooltip.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        showTooltip(event);
    })
})



