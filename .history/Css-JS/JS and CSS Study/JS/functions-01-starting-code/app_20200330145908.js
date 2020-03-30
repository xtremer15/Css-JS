const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const USER_DEFAULT_CHOICE

const getPlayerChoice = function() {
  // Folosim metoda to upperCase pentru a evita introducerea de catre user in caractere mici
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS} ?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert("Invalid Choice , We chose Rock for you!");
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
  console.log("Game starting....");
});
