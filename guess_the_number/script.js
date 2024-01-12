'use strict';

// Set initial values for secret number, score and highscore
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// This event activates when check button clicked
document.querySelector('.check').addEventListener('click', function () {
  // Set guessed number
  const guess = Number(document.querySelector('.guess').value);
  // Check guess not null or zero
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number !';
  }
  // Check guess same as secret number
  else if (guess === secretNumber) {
    displayMessage('🎇 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Check guess different from secret number
  } else if (guess !== secretNumber) {
    // Score bigger than 1,then check guessed number is high or low
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Once score becomes 0,then loose the game
    else {
      displayMessage('💥 You Lose!');
    }
  } else {
    displayMessage('🏆 you win!');
  }
});

// Reset with again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
