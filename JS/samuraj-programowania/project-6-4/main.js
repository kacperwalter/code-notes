const addButton = document.querySelector('.add');
const resetButton = document.querySelector('.clean');

const showAdviceBtn = document.querySelector('.showAdvice');
const showOptionsBtn = document.querySelector('.showOptions');

let advices = [];

const addPossibility = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value.length != 0) {  
        const newPossibility = input.value;
        advices.push(newPossibility);
        input.value = '';
    } else {
        alert('Put value in input area');
    }
}

const reset = (e) => {
    e.preventDefault();
    advices = [];
}

const showAdvice = (e) => {
    e.preventDefault();
    const showText = document.querySelector('h1');
    const randomNumber = Math.floor(Math.random() * advices.length);
    showText.textContent = advices[randomNumber];
}

const showOptions = (e) => {
    e.preventDefault();
    let alertContent = '';
    for ( advice of advices ) {
        alertContent += advice + ', '
    }
    alert(`Możliwości to: ${alertContent}`);
}

addButton.addEventListener('click', addPossibility);
resetButton.addEventListener('click', reset);

showAdviceBtn.addEventListener('click', showAdvice);
showOptionsBtn.addEventListener('click', showOptions);