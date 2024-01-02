import menuImage from '../assets/img/menu.jpeg';
import headerComponent from '../components/header'

export default function() { // populates contentDiv with the contact stuff
    const contentDiv = document.querySelector('#content'); 

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const header = headerComponent();

    const menuImg = document.createElement('img');
    menuImg.src = menuImage;
    menuImg.classList.add('menu-img');

    menuContainer.appendChild(header);
    menuContainer.appendChild(menuImg);

    contentDiv.appendChild(menuContainer);

    const newMenuButton = document.querySelector('.menu-button');
    newMenuButton.disabled = true;
}

/**
 * 
 * 
 * <header>Indulge in Exquisite Flavors: Dive into a Culinary Journey at Derek's Sushi – Where Art Meets Sushi Perfection!</header>
        <img class="sushi-img" src="../src/restaurant-page.jpg" alt="">
        <div class="info">Step into a world where culinary excellence meets creativity, and let our goal to wow you with every dish redefine your expectations of sushi. Prepare for an extraordinary dining journey, where each roll tells a story of precision, innovation, and an unyielding dedication to delighting your palate.</div>
 * 
 * 
 */