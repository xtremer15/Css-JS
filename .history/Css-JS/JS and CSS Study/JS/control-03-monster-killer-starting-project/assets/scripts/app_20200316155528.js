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
const LOG_EVENT_GAME_OVER = "GAME OVER";

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

function writeToLog(event, valueEvent, monsterHealth, playerHealth) {
  let logEntry;
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry = {
      event: event,
      value: valueEvent,
      target: "Monster",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: event,
      value: valueEvent,
      target: "Monster",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (event === LOG_EVENT_MONSTER_ATTACK) {
    logEntry = {
      event: event,
      value: valueEvent,
      target: "PLAYER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (event === LOG_EVENT_MONSTER_STRONG_ATTACK) {
    logEntry = {
      event: event,
      value: valueEvent,
      target: "PLAYER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: event,
      value: valueEvent,
      target: "Player",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (event === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: event,
      value: valueEvent,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  }
  battleLog.push(logEntry);
}
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You Would be dead,but the bonus life saved you!");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
    writeToLog(
      LOG_EVENT_MONSTER_ATTACK,
      "Player WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
    writeToLog(
      LOG_EVENT_MONSTER_ATTACK,
      "Player LOST",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
    writeToLog(
      LOG_EVENT_MONSTER_ATTACK,
      "DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }
}

function attackMonster(mod) {
  let maxDamage;
  let logEvent;
  if (mod === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if ((mod = MODE_STRONG_ATTACK)) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
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
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    cur
  )
  endRound();
}

function printLogHandler() {
  console.log(battleLog);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
strongAttackBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
