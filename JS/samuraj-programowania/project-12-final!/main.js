// const removeTask = (e) => {
//     // e.target.parentNode.remove();
//     e.target.parentNode.style.textDecoration = 'line-through';
//     e.target.remove();
// }

const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
}

const liItems = [...document.querySelectorAll('li button')];

liItems.forEach(item => {
    item.addEventListener('click', removeTask);
})