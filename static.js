let scoresInd = [];
let scoresPak = [];
let totalInd = 0;
let totalPak = 0;
let innings = 1;

document.getElementById('score-btn').onclick = function() {
    if (innings <= 2) {
        let scores = generateScores();
        if (innings === 1) {
            scoresInd = scores;
            totalInd = calculateTotal(scoresInd);
            document.getElementById('scores-ind').textContent = scoresInd.join(' ');
            document.getElementById('total-ind').textContent = `${totalInd}/0`;
        } else {
            scoresPak = scores;
            totalPak = calculateTotal(scoresPak);
            document.getElementById('scores-pak').textContent = scoresPak.join(' ');
            document.getElementById('total-pak').textContent = `${totalPak}/0`;
            determineWinner();
            document.getElementById('score-btn').disabled = true; // Disable the button after the game
        }
        innings++;
    }
};

function generateScores() {
    let scoresArray = [];
    for (let i = 0; i < 6; i++) {
        scoresArray.push(Math.floor(Math.random() * 7)); // Random score of 0 to 6
    }
    return scoresArray;
}

function calculateTotal(scoresArray) {
    return scoresArray.reduce((a, b) => a + b, 0);
}

document.getElementById('reset-btn').addEventListener('click', function() {
    window.location.reload(); // This will reload the page
});

function determineWinner() {
    let resultText = '';
    if (totalInd > totalPak) {
        resultText = 'Result: IND wins by ' + (totalInd - totalPak) + ' runs';
    } else if (totalPak > totalInd) {
        resultText = 'Result: PAK wins by ' + (totalPak - totalInd) + ' runs';
    } else {
        resultText = 'Result: The match is a tie';
    }
    document.getElementById('result').textContent = resultText;
}