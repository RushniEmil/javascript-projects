'use strict';
//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// getelementById more faster ..
//if there are thousands of query selctor only query selecter gets slow
//jonas prefer query selector
const diceEl = document.querySelector('.dice');
// Slecting button elements
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// state variable to hold state of game
let playing = true;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//switch player function
const switchplayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle method adds class if it is not there else removes it if present there
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
};

// Rolling dice functionality
rollBtn.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    //2.Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for rolled 1:if true,switch to next player
    if (dice === 1) {
      // switch to next player
      switchplayer();
    } else {
      // add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore;
      //instead give the first score for the first active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});
// Hold button functionality
holdBtn.addEventListener('click', function () {
  if (playing) {
    console.log('am running');
    console.log(currentScore);
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] <= 20) {
      // switch player

      console.log('am running inside if');
      switchplayer();
      console.log(`current player after switch- ${activePlayer}`);
      console.log(`currentScore after switch- ${currentScore}`);
    } else {
      // current player wins
      console.log('you win');
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
  }
});
