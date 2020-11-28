"use strict";

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        document.querySelector('.loader').classList.remove('loader_active');
        let data = JSON.parse(xhr.responseText);
        let valutes = data.response.Valute;
        for (let element in valutes) {
            document.getElementById('items').innerHTML +=
                `<div class="item">
            <div class="item__code">${valutes[element].CharCode}</div>
            <div class="item__value">${valutes[element].Value}</div>
            <div class="item__currency">руб</div>
            </div>`
        }
    };
};
