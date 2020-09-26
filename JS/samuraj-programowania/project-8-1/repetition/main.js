const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

// Parametry
let indexText = 0;
const time = 40;

// Implementacja
const addLetter = () => {
    let counter = 0;
    console.log(counter);
    counter++;
}

// setInterval returns index every iteration
const indexTyping = setInterval(addLetter, time);