const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const USER_DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let gameIsRuning = false;

const getPlayerChoice = function () {
  // Folosim metoda to upperCase pentru a evita introducerea de catre user in caractere mici
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS} ?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice , We chose ${USER_DEFAULT_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, playerChoice = USER_DEFAULT_CHOICE) => {
  if (computerChoice === playerChoice) {
    return RESULT_DRAW;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return PLAYER_WINS;
  } else {
    return COMPUTER_WINS;
  }
};
// const start = function startGame() {
//     console.log("Game starting....");
//   };
// We can store functions in objs and they`re named methods
// startGame();
// const person = {
//   name: "Mihai",
//   greet: function greet() {
//     console.log("Hello");
//   }
// };

// person.greet();
// Functions are Objs
// console.dir(startGame);

startGameBtn.addEventListener("click", function startGame() {
  if (gameIsRuning) {
    return;
  }
  gameIsRuning = true;
  console.log("Game starting....");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${playerChoice ? playerChoice : USER_DEFAULT_CHOICE} and computer picked ${computerChoice} , you`;
  if (winner === RESULT_DRAW) {
    message = message + " had a draw";
  } else if (winner === PLAYER_WINS) {
    message = message + " won";
  } else {
    message = message + " lost";
  }
  alert(message);
  gameIsRuning = false;
});


// Not realated to the game

const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  }
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  resultHandler(sum);
}

const subtractUp = function (resultHandler, ...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum -= num;
  }
  resultHandler(sum)
}

const showResult = (result, messageText) => {
  alert(messageText + "  " + result)
}

console.log(sumUp(showResult, 1, 3, 5, 6, 1, -19))
console.log(subtractUp(showResult, 1, 3, 5, 6, 1, -19))
