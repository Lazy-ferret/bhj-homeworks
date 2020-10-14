'use strict';

const countdown = function () {
    const startTimer = document.getElementById("timer");
    if (startTimer.textContent > 0) {
        startTimer.textContent -= 1;
    } else {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }
}

const timerId = setInterval(countdown, 1000);

