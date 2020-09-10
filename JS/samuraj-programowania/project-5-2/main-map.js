// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA', 'tRzy'];
const messages = ["super", "działa!",'kuTaS'];
const div = document.getElementById('div');

// map returns new array (does not influence on array we are operating)
console.log([10, 45, 66].map(number => number * 3));

const LCPasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();
    div.textContent = '';
    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i]) {
            div.textContent = messages[i];
        }
    }
}

input.addEventListener("input", showMessage);