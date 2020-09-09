// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
let lowerCasePasswords = [];
const messages = ["super", "działa!"]
const div = document.getElementById('div');

const arrayCaseLowering = (arr) => {
    let lowerCasedArr = [];
    arr.forEach((item, index) => {
        lowerCasedArr.push(item.toLowerCase());
    })
    return lowerCasedArr;
}

arrayCaseLowering(passwords);

const showMessage = (e) => {
    const text = e.target.value;

    // tutaj teraz napisac kodzik ktory zamieni wpisywana wartosc na lowerCase i forEach ktory sprawdzi i porowna wartosci z tablicy o tym samym indeksie 
}

input.addEventListener("input", showMessage)


// const passwordsLowering = () => {
//     passwords.forEach((item, index) => {
//         lowerCasePasswords.push(item.toLowerCase());
//     })
// }


// works fine :)
// passwordsLowering();