const input = document.getElementById('pass');
const password = 'User';
const message = 'wyjechałam na zawsze';
const div = document.querySelector('.message');

// keyup - when key is pressed up, value is assigned to variable
// input.addEventListener('keyup', (e) => {
//     console.log(e.target.value);
// });

input.addEventListener('input', (e) => {
    if (password === e.target.value) { 
        div.textContent = message;
        e.target.value = 'a';
    } else {
        div.textContent = '';
    }
});