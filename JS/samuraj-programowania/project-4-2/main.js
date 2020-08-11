// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

// my solution b4 watching solution
document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if ((x % 2) === 0 && (y % 2 === 0)) {
        document.body.style.backgroundColor = 'red';
    } else if ((x % 2 === 0) || (x % 2 === 0)) {
        document.body.style.backgroundColor = 'green';
    } else {
        document.body.style.backgroundColor = 'blue';
    }

    console.log(e.clientX, e.clientY);
});

// document.body.addEventListener('mousedown', () => {
//     console.log('wciśnięty w dół');
// });

// document.body.addEventListener('mouseup', () => {
//     console.log('wciśnięty do góry');
// });