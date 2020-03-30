const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game starting....");
}

// startGame();
// const person = {
//   name: "Max",
//   greet: function greet() {
//     console.log("Hello");
//   }
// };

// person.greet();
console.dir(startGame)
startGameBtn.addEventListener("click", startGame);
