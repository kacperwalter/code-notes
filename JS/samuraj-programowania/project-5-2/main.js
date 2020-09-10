// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA', 'tRzy'];
const messages = ["super", "działa!",'kuTaS'];
const div = document.getElementById('div');

const arrayCaseLowering = (arr) => {
    let lowerCasedArr = [];
    arr.forEach((item, index) => {
        lowerCasedArr.push(item.toLowerCase());
    })
    return lowerCasedArr;
}

const showMessage = (e) => {
    const text = e.target.value;
    div.textContent = '';
    arrayCaseLowering(passwords).forEach((item, index) => {
       if (item === text.toLowerCase()) {
           div.textContent = messages[index];
       }
    })
}

input.addEventListener("input", showMessage);