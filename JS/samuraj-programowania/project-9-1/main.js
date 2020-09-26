const slideList = [
{
    img: "images/img1.jpg",
    text: "Pierwszy text"
},
{
    img: "images/img2.jpg",
    text: "Drugi text"
},
{
    img: "images/img3.jpg",
    text: "Trzeci text"
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');

// Interfejs
const time = 5000;
let active = 0;

const changeSlide = () => {
    active++;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
}

// setInterval(changeSlide, time);

// Implementacja


