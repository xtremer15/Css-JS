const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const getPlayerChoice = function() {
  // Folosim metoda to upperCase pentru a evita introducerea user
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS} ?`,
    ""
  ).toUpperCase();
  if (
    selection !== "Rock" &&
    selection !== "Paper" &&
    selection !== "Scissors"
  ) {
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
