const input = document.getElementById('pass');

const div = document.querySelector('.message');

const password = 'user';
const message = 'wiadomość';

input.addEventListener('input', (e) => {
    console.log(e.target.value); // if dont remember, check console
    if (password === e.target.value) {
        div.textContent = message;
    } else {
        div.textContent = '';
    }
});

input.addEventListener('focus', (e) => {
    e.target.classList.toggle('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.toggle('active');
});