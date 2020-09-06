const clickButton = document.querySelector('.box-button');
const placeForElements = document.querySelector('.numbers');
let counter = 1;

clickButton.addEventListener('click', (e) => {
    if ((counter % 5) != 0) {
        const regularElement = document.createElement('div');
        regularElement.classList = 'square';
        regularElement.textContent = counter;
        placeForElements.appendChild(regularElement);
    } else {
        const notRegularElement = document.createElement('div');
        notRegularElement.classList = 'round';
        notRegularElement.textContent = counter;
        placeForElements.appendChild(notRegularElement);
    }
    counter += 1;
})