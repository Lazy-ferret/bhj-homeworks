'use strict';

const clickerCounter = document.getElementById("clicker__counter");

const cookie = document.getElementById("cookie");
        
cookie.onclick = function() {
    clickerCounter.textContent++;
    cookie.width = (cookie.width == 200) ? 180 : 200; 
}


