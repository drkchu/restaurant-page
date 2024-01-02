import sushiImage from '../assets/img/restaurant-page.jpg';
import headerComponent from '../components/header'

export default function() { // populates contentDiv with the home stuff
    const contentDiv = document.querySelector('#content'); 

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const header = headerComponent();

    const sushiImg = document.createElement('img');
    sushiImg.src = sushiImage;
    sushiImg.classList.add('sushi-img');

    const info = document.createElement('div');
    info.textContent = "Step into a world where culinary excellence meets creativity, and let our goal to wow you with every dish redefine your expectations of sushi. Prepare for an extraordinary dining journey, where each roll tells a story of precision, innovation, and an unyielding dedication to delighting your palate.";
    info.classList.add('info');

    homeContainer.appendChild(header);
    homeContainer.appendChild(sushiImg);
    homeContainer.appendChild(info);

    contentDiv.appendChild(homeContainer);

    const newHomeButton = document.querySelector('.home-button');
    newHomeButton.disabled = true;
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