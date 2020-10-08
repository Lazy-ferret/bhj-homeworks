'use strict';

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const getHole = index => document.getElementById(`hole${index}`);

const resetGame = () => {
    dead.textContent = 0;
    lost.textContent = 0;
};

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function () {
        hole.className.includes('hole_has-mole') ? dead.textContent++ : lost.textContent++;
        if (dead.textContent == '10') {
            alert("Перестань убивать кротов! Ты победил!!!");
            resetGame();
        };
        if (lost.textContent == '5') {
            alert("Потренируйся на слонах! Ты проиграл!!!");
            resetGame();
        }
    }
}