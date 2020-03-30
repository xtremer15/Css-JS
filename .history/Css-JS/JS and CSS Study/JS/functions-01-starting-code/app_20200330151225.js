const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const USER_DEFAULT_CHOICE = ROCK;

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

function getComputerChoice = function () {
  const randomValue = Math.random();
  if(randomValue < 0.34){
    return
  }
}

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
  console.log(playerSelection);
});
