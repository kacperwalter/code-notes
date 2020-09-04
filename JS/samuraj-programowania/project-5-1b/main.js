const input = document.getElementById('pass');

const div = document.querySelector('.message');

const passwords = ['user1', 'wiosna', 'ania'];
const messages = ['wiadomość', 'jeszcze jedna wiadomość', 'ania do prania'];

input.addEventListener('input', (e) => {
    div.textContent = '';
    const text = e.target.value;

    // foreach to master
    passwords.forEach((password, index) => {
        if(password === text) {
            div.textContent = messages[index];
        }
    });
});

input.addEventListener('focus', (e) => {
    e.target.classList.toggle('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.toggle('active');
});
