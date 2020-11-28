'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.response);
        document.querySelector('#poll__title').innerText = data.data.title;
        let answers = data.data.answers;
        answers.forEach(element => {
            document.getElementById('poll__answers').insertAdjacentHTML('beforeEnd',
                `<button class="poll__answer">${element}</button>`);
        });
        let buttons = Array.from(document.querySelectorAll('.poll__answer'));
        buttons.forEach(button => {
            button.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        })
    }
}