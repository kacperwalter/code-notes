const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

let counter = 0;

const addLetter = () => {
    if (counter < txt.length) {
        spnText.textContent += txt[counter]
    } else {
        clearInterval(indexTyping);
    }
    counter++;
}

const indexTyping = setInterval(addLetter, 10);