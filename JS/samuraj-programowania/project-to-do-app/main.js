const taskAddField = document.getElementById('todo-input');
const taskAddButton = document.querySelector('.box-button');
const todoUlList = document.getElementById('todos-ul');
let todoContent = '';

taskAddField.addEventListener('input', (e) => {
    todoContent = e.target.value;
})

taskAddButton.addEventListener('click', (e) => {
    if (todoContent != '') {
        const todoElement = document.createElement('li');
        todoElement.textContent = todoContent;
        todoUlList.appendChild(todoElement);
        todoContent = '';
    }  else {
        alert('Put value in input area');
    } 
})