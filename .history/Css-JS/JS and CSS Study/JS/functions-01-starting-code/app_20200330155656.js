const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const USER_DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const PLAYER_WINS = "PLAYER WINS";
const COMPUTER_WINS = "COMPUTER WINS";

let gameIsRuning = false;

const getPlayerChoice = function() {
  // Folosim metoda to upperCase pentru a evita introducerea de catre user in caractere mici
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS} ?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice , We chose ${USER_DEFAULT_CHOICE} for you!`);
    return USER_DEFAULT_CHOICE;
  }
  return selection;
};

const getComputerChoice = function() {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (computerChoice, playerChoice) => {
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
//   name: "Max",
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
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerSelection);

  let message = `You picked ${playerSelection} and computer picked ${computerChoice} , you`;
  if (winner === RESULT_DRAW) {
    message = message + " had a draw";
  } else if (winner === PLAYER_WINS) {
    message = message + " won";
  }else {}
});
