// Get DOM elements
const choices = document.querySelectorAll('.choice');
const resultMessage = document.getElementById('result-message');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

// Choices array
const CHOICES = ['rock', 'paper', 'scissors'];

// Function to get computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

// Function to determine the winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return 'draw';
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  }
  return 'computer';
}

// Update the result message and scores
function updateResult(playerChoice, computerChoice, winner) {
  if (winner === 'draw') {
    resultMessage.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (winner === 'player') {
    resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
    playerScoreSpan.textContent = playerScore;
  } else {
    resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
    computerScoreSpan.textContent = computerScore;
  }
}

// Event listeners for player choices
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    updateResult(playerChoice, computerChoice, winner);
  });
});
