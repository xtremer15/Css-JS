const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 24;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG ATTACK";
// Battle Log Event
const LOG_EVENT_PLAYER_HEAL = "PLAYER HEAL";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER STRONG ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER ATTACK";
const LOG_EVENT_MONSTER_STRONG_ATTACK = "MONSTER STRONG ATTACK";
const LOG_EVENT_GAME_OVER = "GAME OVER"

let chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

const enteredValue = prompt("Maximum life for you and your monster", "100");
chosenMaxLife = parseInt(enteredValue);
const battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame();
}

function battleLog(event,valueEvent,monsterHealth,playerHealth){
  let logEntry;
  if(event)
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You Would be dead,but the bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
    reset(chosenMaxLife);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
    reset(chosenMaxLife);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
    reset(chosenMaxLife);
  }
}

function attackMonster(mod) {
  let maxDamage;
  if (mod === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else if ((mod = MODE_STRONG_ATTACK)) {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("YOU CAN`T HEAL OVER THE NORMAL HP");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
strongAttackBtn.addEventListener("click", healPlayerHandler);
