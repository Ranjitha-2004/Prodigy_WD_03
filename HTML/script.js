let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const resetBtn = document.getElementById('reset-btn');

cells.forEach((cell, index) => {
	cell.addEventListener('click', () => {
		if (gameOver) return;
		if (board[index] !== '') return;
		board[index] = currentPlayer;
		cell.textContent = currentPlayer;
		checkWinner();
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	});
});

resetBtn.addEventListener('click', () => {
	board = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	gameOver = false;
	cells.forEach((cell) => {
		cell.textContent = '';
	});
});

function checkWinner() {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (const condition of winConditions) {
		if (
			board[condition[0]] !== '' &&
			board[condition[0]] === board[condition[1]] &&
			board[condition[0]] === board[condition[2]]
		) {
			alert(`Player ${board[condition[0]]} wins!`);
			gameOver = true;
			return;
		}
	}
	if (!board.includes('')) {
		alert('It\'s a draw!');
		gameOver = true;
	}
}


