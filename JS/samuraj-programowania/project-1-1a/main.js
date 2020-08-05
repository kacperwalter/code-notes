const buttonListener = document.querySelector('.box-button');

// add click counter => if five or multiple make round else make square
let counter = 0;

const addElement = function() {
    counter += 1;
    if((counter % 5) === 0) {
        const roundElement = document.createElement('div');
        roundElement.classList.add("round");
        roundElement.textContent = counter;
        document.querySelector('.numbers').appendChild(roundElement);
    } else {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.textContent = counter;
        document.querySelector('.numbers').appendChild(squareElement);
    }
}

buttonListener.addEventListener('click', addElement);