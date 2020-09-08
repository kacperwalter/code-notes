const input = document.getElementById('pass');

const password = "user";
const message = "wyjechałam na zawsze";

const div = document.querySelector('.message');

input.addEventListener('input', (e) => {
    // console.log(e.target.value);
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = '';
    } else {
        div.textContent = '';
    }
})

input.addEventListener('focus', (e) => {
    // if dont remember, console log code below
    // console.log(e.target);
    e.target.classList.toggle('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.toggle('active');
})