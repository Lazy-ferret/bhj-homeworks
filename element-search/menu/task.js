'use strict';

const menuLinks = Array.from(document.getElementsByClassName('menu__link'));

for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];
    menuLink.onclick = () => {
        if (menuLink.nextElementSibling.className.includes('menu_active')) {
            menuLink.nextElementSibling.classList.remove('menu_active');
            return false
        }
        if (menuLink.nextElementSibling.className.includes('menu_sub')) {
            menuLink.nextElementSibling.classList.add('menu_active');
            return false
        }
    }
}



