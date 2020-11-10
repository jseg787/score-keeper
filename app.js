const p1 = {
	score: 0,
	button: document.querySelector('#p1-btn'),
	display: document.querySelector('#p1-display')
};

const p2 = {
	score: 0,
	button: document.querySelector('#p2-btn'),
	display: document.querySelector('#p2-display')
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = Number(winningScoreSelect.value);
let isGameOver = false;

p1.button.addEventListener('click', function() {
	updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
	updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function() {
	resetGame();
	winningScore = Number(this.value);
});

resetButton.addEventListener('click', resetGame);

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('has-text-success');
			opponent.display.classList.add('has-text-danger');
			player.button.disabled = true;
			player.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

function resetGame() {
	isGameOver = false;

	for (let p of [ p1, p2 ]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-danger', 'has-text-success');
		p.button.disabled = false;
	}
}
