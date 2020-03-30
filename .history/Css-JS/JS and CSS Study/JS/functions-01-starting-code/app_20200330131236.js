const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game starting....");
}

// startGame();
const person = {
  name: "Mihai",
  greet: function greet() {
    console.log("Hello");
  };
};

person.person();

startGameBtn.addEventListener("click", startGame);
