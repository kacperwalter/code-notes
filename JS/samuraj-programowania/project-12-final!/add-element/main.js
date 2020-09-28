const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.querySelectorAll('li.task');
const input = document.querySelector('input');

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask == '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + " <button>Usuń</button>";
    ul.appendChild(task);
    input.value = '';
}

form.addEventListener('submit', addTask)
