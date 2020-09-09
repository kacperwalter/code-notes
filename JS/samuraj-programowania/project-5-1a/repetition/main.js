const input = document.getElementById('pass');

const passwords = ["user", "wiosna", "ania"];
const messages = ["wyjechałam na zawsze", "piękna pora roku", "piękny styl masz"];

const div = document.querySelector('.message');

input.addEventListener('input', (e) => {
    const text = e.target.value;
    div.textContent = '';

    passwords.forEach((password, index) => {
        if (password === text) {
            console.log(password, index);
            div.textContent = messages[index];
        }
    })
})

input.addEventListener('focus', (e) => {
    // if dont remember, console log code below
    // console.log(e.target);
    e.target.classList.toggle('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.toggle('active');
})