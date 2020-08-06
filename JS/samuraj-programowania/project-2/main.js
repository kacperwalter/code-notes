const btn = document.querySelector('.box-button');

let counter = 1;
let number = 1;

const addElement = function() {
    if((counter % 3 === 0) || counter === 1) {
        const threeMultiple = document.createElement('li');
        threeMultiple.textContent = number;
        threeMultiple.classList.add('three-multiple');
        document.querySelector('ul').appendChild(threeMultiple);
        counter = 1;
    } else {
        const normalElement = document.createElement('li');
        normalElement.textContent = number;
        normalElement.classList.add('normal-li');
        document.querySelector('ul').appendChild(normalElement);
    }
    counter++;
    number += 2;
    console.log('works');
}

btn.addEventListener('click', addElement);