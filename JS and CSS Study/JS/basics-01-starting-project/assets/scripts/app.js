const defaultResult = 0;
let currentResult = defaultResult;

//Gets the value from the input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Writes and outputs the operations that took place
function outputLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //Calls the method from vendro.js file
}

function add() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult += enterenedNr;
  outputLog("+", initialValue, currentResult);
}

function subtract() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult -= enterenedNr;
  outputLog("-", initialValue, currentResult);
}
function multiply() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult *= enterenedNr;
  outputLog("*", initialValue, currentResult);
}
function divide() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult /= enterenedNr;
  outputLog("/", initialValue, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
