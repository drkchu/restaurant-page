import contactImage from '../assets/img/contact.jpeg';
import headerComponent from '../components/header'

export default function() { // populates contentDiv with the contact stuff
    const contentDiv = document.querySelector('#content'); 

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const header = headerComponent();

    const contactImg = document.createElement('img');
    contactImg.src = contactImage;
    contactImg.classList.add('contact-img');

    contactContainer.appendChild(header);
    contactContainer.appendChild(contactImg);

    contentDiv.appendChild(contactContainer);

    const newContactButton = document.querySelector('.contact-button');
    newContactButton.disabled = true;
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