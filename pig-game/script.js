'use strict';

const player = [
  { playerScore: 0, currentScore: 0 },
  { playerScore: 0, currentScore: 0 },
];

let currentPlayer = 0;
let currentDice = 1;

const displayPlayerScore = currentPlayer => {
  document.querySelector(`#score--${currentPlayer}`).textContent =
    player[currentPlayer].playerScore;
};

const displayCurrentScore = currentPlayer => {
  document.querySelector(`#current--${currentPlayer}`).textContent =
    player[currentPlayer].currentScore;
};

const displayDice = currentDice =>
  document
    .querySelector('.dice')
    .setAttribute('src', `dice-${currentDice}.png`);

player.forEach((arr, i) => {
  displayPlayerScore(i);
  displayCurrentScore(i);
});

displayDice(currentDice);

document.querySelector('.btn--roll').addEventListener('click', () => {
  currentDice = Math.trunc(Math.random() * 6) + 1;
  if (currentDice !== 1) {
    displayDice(currentDice);
    player[currentPlayer].currentScore += currentDice;
    displayCurrentScore(currentPlayer);
  } else {
    displayDice(currentDice);
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--active');
    player[currentPlayer].currentScore = 0;
    displayCurrentScore(currentPlayer);
    if (currentPlayer === 0) {
      currentPlayer = 1;
    } else {
      currentPlayer = 0;
    }
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--active');
    currentDice = 1;
  }
});

document.querySelector('.btn--hold').addEventListener('click', () => {
  player[currentPlayer].playerScore += player[currentPlayer].currentScore;
  player[currentPlayer].currentScore = 0;
  displayPlayerScore(currentPlayer);
  displayCurrentScore(currentPlayer);
  if (player[currentPlayer].playerScore >= 50) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.replace('player--active', 'player--winner');
    document.querySelector('.btn--hold').disabled = true;
    document.querySelector('.btn--roll').disabled = true;
  } else {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove('player--active');
    if (currentPlayer === 0) {
      currentPlayer = 1;
    } else {
      currentPlayer = 0;
    }
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--active');
  }
});

document.querySelector('.btn--new').addEventListener('click', () => {
  document.querySelector('.btn--hold').disabled = false;
  document.querySelector('.btn--roll').disabled = false;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner', 'player--active');
  player.forEach((arr, i) => {
    arr.currentScore = 0;
    arr.playerScore = 0;
    displayPlayerScore(i);
    displayCurrentScore(i);
  });
  currentPlayer = 0;
  currentDice = 1;
  displayDice(currentDice);
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');
});
//edit
