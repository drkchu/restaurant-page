import home from '../pages/home'
import contact from '../pages/contact';
import menu from '../pages/menu';

export default function() {
    const header = document.createElement('header');
    header.classList.add('header');
    
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('home-button');

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contact-button');

    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);

    const contentDiv = document.querySelector('#content');

    homeButton.addEventListener('click', () => {
        contentDiv.textContent = '';
        home();
    });

    menuButton.addEventListener('click', () => {
        contentDiv.textContent = '';
        menu();
    });

    contactButton.addEventListener('click', () => {
        contentDiv.textContent = '';
        contact();
    });

    return header;
}