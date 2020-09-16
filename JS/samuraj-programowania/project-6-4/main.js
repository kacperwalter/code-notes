const addButton = document.querySelector('.add');
const resetButton = document.querySelector('.clean');

const showAdviceBtn = document.querySelector('.showAdvice');
const showOptionsBtn = document.querySelector('.showOptions');

const addPossibility = (e) => {
    e.preventDefault();
}

const reset = (e) => {
    e.preventDefault();
}

const showAdvice = (e) => {
    e.preventDefault();
}

const showOptions = (e) => {
    e.preventDefault();
}

addButton.addEventListener('click', addPossibility);
resetButton.addEventListener('click', reset);

showAdviceBtn.addEventListener('click', showAdvice);
showOptionsBtn.addEventListener('click', showOptions);