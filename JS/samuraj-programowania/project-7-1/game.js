// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

let playerChoice;
let playerChecked = false;

let numberOfGamesPlayed = 0;
let winGames = 0;
let lostGames = 0;
let drawGames = 0;

const winner = ["Gracz", "Komputer"];

const weaponChoice = ['paper', 'rock', 'scissors'];

document.querySelector('.paper').addEventListener('click', (e) => {
    document.querySelector('.paper').classList.add('selected-img');
    playerChoice = weaponChoice[0];
    playerChecked = true;
});

document.querySelector('.rock').addEventListener('click', (e) => {
    document.querySelector('.rock').classList.add('selected-img');
    playerChoice = weaponChoice[1];
    playerChecked = true;
});

document.querySelector('.scissors').addEventListener('click', (e) => {
    document.querySelector('.scissors').classList.add('selected-img');
    playerChoice = weaponChoice[2];
    playerChecked = true;
});

document.querySelector('.start').addEventListener('click', (e) => {
    if (playerChecked) {
        const computerChoice = weaponChoice[Math.floor(Math.random() * weaponChoice.length)];
        console.log(computerChoice);
    } else {
        alert('Wybierz swoją broń :)')
    }
})
