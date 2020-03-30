const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game starting....");
}
// We can store funct
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


startGameBtn.addEventListener("click", startGame);
