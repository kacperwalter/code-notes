let number = 0;

const add = () => {
    number++;
    document.body.textContent = `aktualny stan licznika to ${number}`;
}

document.addEventListener('click', add);