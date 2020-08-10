let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = "Dodaj 10 elementów do listy";
    const ul = document.createElement('ul');
    document.body.appendChild(btn);
    document.body.appendChild(ul);

    btn.addEventListener('click', createLiElements);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li');
        liElement.style.order = orderElement;
        liElement.style.fontSize = size +'px';
        liElement.textContent = orderElement;
        document.querySelector('ul').appendChild(liElement);
        orderElement++;
        size++;
    }
}

init()