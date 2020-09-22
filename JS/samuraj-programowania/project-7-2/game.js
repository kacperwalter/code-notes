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

function checkResult(player, ai) {
    if(player === ai) {
        return 'draw';
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === "nożyczki") || (player === 'nożyczki' && ai === 'papier')) {
        return 'win';
    } else {
        return 'loss';
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.numbers++;
    document.querySelector('p.numbers span').textContent = gameSummary.numbers;
    
    if (result == 'win') {
        gameSummary.wins++;
        document.querySelector('p.wins span').textContent = gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś"
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    } else if (result = 'loss') {
        gameSummary.losses++;
        document.querySelector('p.losses span').textContent = gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał"
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    } else {
        gameSummary.draws++;
        document.querySelector('p.draws span').textContent = gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis"
        document.querySelector('[data-summary="who-win"]').style.color = 'yellow';
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
}

function startGame() {
    // without return function will run continiously
    if(!game.playerHand) return alert('Choose weapon!');
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach((item, index) => {
    item.addEventListener('click', handSelecion);
})

document.querySelector('.start').addEventListener('click', startGame);