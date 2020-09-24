// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

// Implementacja
const addLetter = () => {
 // Użyj w środku setTimeout
 setTimeout(() => {
     for (let i=0; i<=txt.length; i++) {
         let counter = 0;
         setTimeout(() => {
             for ( letter of txt[i] ) {
                 
             }
         })
     }
 }, 50)
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);