/* show options */
let features = document.querySelector('#features');
let company = document.querySelector('#company');
let options1 = document.querySelector('#options1');
let options2 = document.querySelector('#options2');
let arrow1 = document.querySelector('#arrowDown1');
let arrow2 = document.querySelector('#arrowDown2');

function arrowMenu(option, arrowIf) {

    option.classList.toggle('hide');

    if (option.classList.contains('hide')) {
        arrowIf.setAttribute('src', './images/icon-arrow-down.svg');
    } else {
        arrowIf.setAttribute('src', './images/icon-arrow-up.svg');    
    }

}

features.addEventListener('click', () => arrowMenu(options1, arrow1));
company.addEventListener('click', () => arrowMenu(options2, arrow2));

/* Menu mobile */
const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu() {

    const menu = document.querySelector('#menu');

    menu.classList.toggle('active');

    let iconMenu = btnMobile.querySelector("img");
    if (menu.classList.contains("active")) {
        iconMenu.setAttribute("src", "./images/close-menu.svg");
    } else {
        iconMenu.setAttribute("src", "./images/menu.svg");
    }

}

btnMobile.addEventListener('click', toggleMenu);