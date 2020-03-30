const startGameBtn = document.getElementById("start-game-btn");

const getPlayerChoice = function() {
  const selection = prompt("Rock,Paper or Scissors ?", "");
  if(selection !== "Rock" )
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
