const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    // preventDefault stops default action
    e.preventDefault();
    const input = document.querySelector('input');
    // adds input when button is clicked
    const name = input.value;
    names.push(name);
    div.textContent += name + ', ';
    input.value = '';
}

document.querySelector('button').addEventListener('click', addName);