const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets the value from the input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Writes and outputs the operations that took place
function outputLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //Calls the method from vendro.js file
}

function writeToLog(
  operationIdentifier,
  previousResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: previousResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult += enterenedNr;
  outputLog("+", initialValue, currentResult);
  writeToLog("ADD", initialValue, enterenedNr, currentResult);
}

function subtract() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult -= enterenedNr;
  outputLog("-", initialValue, currentResult);
  writeToLog("SUBTRACT", initialValue, enterenedNr, currentResult);
}
function multiply() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult *= enterenedNr;
  outputLog("*", initialValue, currentResult);
  writeToLog("MULTIPLY", initialValue, enterenedNr, currentResult);
}
function divide() {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  currentResult /= enterenedNr;
  outputLog("/", initialValue, currentResult);
  writeToLog("DIVIDE  ", initialValue, enterenedNr, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
