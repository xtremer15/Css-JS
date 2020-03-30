const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game starting....");
}

// startGame();
const person = {
  greet: function greet() {
    console.log("Hello");
  }
};

startGame.addEventListener("click", startGame);
