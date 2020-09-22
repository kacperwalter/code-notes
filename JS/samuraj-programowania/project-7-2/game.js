// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
// obiektówa - kodowane razem z prowadzącym po zakodowaniu najpierw samemu

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    aiHand: null
}

// rest operator ([...smth]) makes array from for ex. NodeList (array has more methods than NodeList)
const hands = [...document.querySelectorAll('.select img')];

// there we use this but in arrow function we pass e and operating on e (event)
function handSelecion() {
    // dataset because we use data-xyz in html
    game.playerHand = this.dataset.option;
    hands.forEach(item => item.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function startGame() {
    // without return function will run continiously
    if(!game.playerHand) return alert('Choose weapon!');
    game.aiHand = aiChoice();
}

hands.forEach((item, index) => {
    item.addEventListener('click', handSelecion);
})

document.querySelector('.start').addEventListener('click', startGame);