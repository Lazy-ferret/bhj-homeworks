'use strict';

const button = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

function addTask() {
    if (input.value !== '') {
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.insertAdjacentHTML('beforeend',
            `<div class="task__title">
                ${input.value}
           </div>
           <a href="#" class="task__remove">&times;</a>`);
        tasksList.appendChild(newTask);
        input.value = '';
        newTask.querySelector('.task__remove').addEventListener('click', () => {
            newTask.remove();
        })
    }
}

button.addEventListener('click', event => {
    event.preventDefault();
    addTask();
})
