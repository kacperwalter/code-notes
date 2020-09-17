// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

let playerChoice;
let playerChecked = false;

let numberOfGamesPlayed = 0;
let winGames = 0;
let lostGames = 0;
let drawGames = 0;

const whoIsWinner = ["Gracz", "Komputer", "Remis"];
let winner;

const whoWinTextArea = document.querySelector('.winner')

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

// const weaponChoice = ['paper', 'rock', 'scissors'];
const battle = (playerWeapon, computerWeapon) => {
    switch (playerWeapon) {
        case weaponChoice[0]:
                if (computerWeapon[1]) {
                    numberOfGamesPlayed += 1;
                    winGames += 1;
                    whoWinTextArea.textContet = whoIsWinner[0];
                } else if (computerWeapon[2]) {
                    numberOfGamesPlayed += 1;
                    lostGames += 1;
                    whoWinTextArea.textContet = whoIsWinner[1];
                } else {
                    numberOfGamesPlayed += 1;
                    drawGames += 1;
                    whoWinTextArea.textContet = whoIsWinner[2];
                }
            break;
        case weaponChoice[1]:
                if (computerWeapon[0]) {
                    numberOfGamesPlayed += 1;
                    lostGames += 1;
                    whoWinTextArea.textContet = whoIsWinner[1];
                } else if (computerWeapon[2]) {
                    numberOfGamesPlayed += 1;
                    winGames += 1;
                    whoWinTextArea.textContent = whoIsWinner[0];
                } else {
                    numberOfGamesPlayed += 1;
                    drawGames += 1;
                    whoWinTextArea.textContent = whoIsWinner[2];
                }
            break;
        case weaponChoice[2]:
                if (computerWeapon[0]) {
                    numberOfGamesPlayed += 1;
                    winGames += 1;
                    whoWinTextArea.textContent = whoIsWinner[0];
                } else if (computerWeapon[1]) {
                    numberOfGamesPlayed += 1;
                    lostGames += 1;
                    whoWinTextArea.textContent = whoIsWinner[1];
                } else {
                    numberOfGamesPlayed += 1;
                    drawGames += 1;
                    whoWinTextArea.textContent = whoIsWinner[2];
                }
            break;

    }
}

document.querySelector('.start').addEventListener('click', (e) => {
    if (playerChecked) {
        const computerChoice = weaponChoice[Math.floor(Math.random() * weaponChoice.length)];
        console.log(computerChoice);
    } else {
        alert('Wybierz swoją broń :)')
    }
})
