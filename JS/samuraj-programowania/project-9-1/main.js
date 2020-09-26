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
const dots = [...document.querySelectorAll('.dots span')];

// Interfejs
const time = 5000;
let active = 0;


// Implementacja

const changeDot = () => {
    // findIndex returns index of element in array when it has something what we want to find
    const adctiveDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[adctiveDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

setInterval(changeSlide, time);



