const randomNumber = Math.round(Math.random() * 9 + 1);
console.log(randomNumber);

const winLose = document.querySelector("#winLose");

const submitBtn = document.querySelector("#submitBtn");
const userInput = document.querySelector("#userInput");

const guessSlot = document.querySelector(".guesses");
const remaining1 = document.querySelector(".remaining");
const resultParas = document.querySelector(".resultParas");

let prevGuuess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter valid nuber");
  } else if (guess < 1) {
    alert("Enter valid nuber IN BETWEEN 1 t0 10");
  } else if (guess > 10) {
    alert("Enter valid nuber IN BETWEEN 1 t0 10");
  } else {
    prevGuuess.push(guess);
    console.log(prevGuuess);
  }
  if (numguess === 4) {
    displygueses(guess);
    guessMassage(`Game Over, The number was:${randomNumber}`);
    endGame();
  } else {
    displygueses(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    guessMassage(`You are Winner`);
    endGame();
  } else {
    guessMassage(`You are Loser`);
  }
}

function displygueses(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numguess++;
  remaining1.innerHTML = `${4 - numguess}`;
}

function guessMassage(message) {
  winLose.innerHTML = `<h2>${message}</h2>`;
}
