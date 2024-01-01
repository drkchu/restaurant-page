import sushiImage from '../assets/img/restaurant-page.jpg';

export default function() {
    const contentDiv = document.querySelector('#content'); 

    const header = document.createElement('header');
    header.textContent = "Indulge in Exquisite Flavors: Dive into a Culinary Journey at Derek's Sushi – Where Art Meets Sushi Perfection!";
    header.classList.add('header');

    const sushiImg = document.createElement('img');
    sushiImg.src = sushiImage;
    sushiImg.classList.add('sushi-img');

    const info = document.createElement('div');
    info.textContent = "Step into a world where culinary excellence meets creativity, and let our goal to wow you with every dish redefine your expectations of sushi. Prepare for an extraordinary dining journey, where each roll tells a story of precision, innovation, and an unyielding dedication to delighting your palate.";
    info.classList.add('info');

    contentDiv.appendChild(header);
    contentDiv.appendChild(sushiImg);
    contentDiv.appendChild(info);
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