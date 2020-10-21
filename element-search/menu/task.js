'use strict';

const menuLinks = Array.from(document.getElementsByClassName('menu__link'));

for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];
    menuLink.onclick = () => {
        if (menuLink.nextElementSibling.className.includes('menu_sub')) {
            menuLink.nextElementSibling.classList.toggle('menu_active');
            return false;
        }
    }
}

