// script.js
const board = document.getElementById('board');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart');

let currentPlayer = 'X';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];

// Create the game board
function createBoard() {
  board.innerHTML = '';
  boardState.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.dataset.index = index;
    cellElement.addEventListener('click', handleCellClick);
    board.appendChild(cellElement);
  });
}

// Handle cell click
function handleCellClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (boardState[index] !== '' || !gameActive) return;

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');

  if (checkWin()) {
    message.textContent = `Player ${currentPlayer} wins! with Mojahid`;
    gameActive = false;
    return;
  }

  if (boardState.every(cell => cell !== '')) {
    message.textContent = "It's an draw! with Mojahid";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  message.textContent = `Player ${currentPlayer}'s turn with Mojahid`;
}

// Check for win
function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => boardState[index] === currentPlayer);
  });
}

// Restart the game
restartButton.addEventListener('click', () => {
  currentPlayer = 'X';
  gameActive = true;
  boardState = ['', '', '', '', '', '', '', '', ''];
  message.textContent = `Player ${currentPlayer}'s turn`;
  createBoard();
});

// Initialize the game
createBoard();
message.textContent = `Player ${currentPlayer}'s turn`;
