'use strict';

const signin = document.getElementById('signin');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('user_id')) {
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.getItem('user_id');
} else {
    signin.classList.add('signin_active');
}

signinBtn.addEventListener('click', (event) => {
    const signinForm = document.getElementById('signin__form');
    let formData = new FormData(signinForm);
    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);

        if (data.success === false) {
            alert('Неверный логин/пароль')
        } else {
            localStorage.setItem('user_id', data['user_id'])
            signin.classList.remove('signin_active');

            welcome.classList.add('welcome_active');
            userId.innerText = localStorage.getItem('user_id');
        }
    }

    xhr.send(formData);
})