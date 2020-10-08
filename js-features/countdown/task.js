'use strict';

const countdown = function () {
    const startTimer = document.getElementById("timer");
    if (startTimer.textContent > 0) {
        startTimer.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");
    }
}

setInterval(countdown, 1000);


