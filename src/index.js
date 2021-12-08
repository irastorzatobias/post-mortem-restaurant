import {createHeader} from './header.js';
import {createHome} from './home.js';
import {createMenu} from './menu.js';
import {createContact} from './contact.js';

function removeActive(){
    let btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
    });
}


function main(){
    // Creating elements
    let content = document.getElementById('content');
    let mainEl = document.createElement('main');
    mainEl.setAttribute('id', 'main');
    
    content.appendChild(createHeader()); // Header
    content.appendChild(mainEl);
    
    let menuEl = createMenu();


    // Selecting buttons
    let homeBtn = document.querySelector('.btn-home');
    let menuBtn = document.querySelector('.btn-menu');
    let aboutBtn = document.querySelector('.btn-about');

    mainEl.appendChild(createHome()); // Home
    // Adding event listeners
    homeBtn.addEventListener('click', (e) => {
        removeActive();
        homeBtn.classList.add('active');
        mainEl.innerHTML = '';
        mainEl.appendChild(createHome());
    });
    menuBtn.addEventListener('click', (e) => {
        removeActive();
        menuBtn.classList.add('active');
        mainEl.innerHTML = '';
        mainEl.appendChild(menuEl);
    });
    aboutBtn.addEventListener('click', (e) => {
        removeActive();
        aboutBtn.classList.add('active'); 
        mainEl.innerHTML = '';
        mainEl.appendChild(createContact('+123 456 789','Tlalnepantla de Baz, Estado de México, México','./images/location.png'));
    });

};

main();