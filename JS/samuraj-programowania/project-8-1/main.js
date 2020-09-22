const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

let indexText = 0;
const time = 10;

const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText == txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, time);
