const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const login = document.querySelector('.login-btn');
const about = document.querySelector('nav .menu .ab-us');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
login.addEventListener('click',close);
about.addEventListener('click',close);


function show(){
    menu.style.display = 'flex';
    menu.style.top = '0';
}

function close(){
    menu.style.top = '-100%';
}