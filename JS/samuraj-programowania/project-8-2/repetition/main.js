// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let activeText = 0;
let activeLetter = 0;

let counter = 0;

// Implementacja
const addLetter = () => {
    if (activeLetter < txt[activeText].length) {
        spnText.textContent += txt[activeText][activeLetter];   
        activeLetter++;
    } else {
        activeText++;
        activeLetter = 0;
        spnText.textContent = '';
        // clearTimeout(timeout);
    }
    const timeout = setTimeout(addLetter, 100);
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);