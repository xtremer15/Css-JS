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

function calculateResult(calculationOperator) {
  const enterenedNr = getUserNumberInput();
  const initialValue = currentResult;
  let mathOperator;
  if (calculationOperator === 'ADD') {
    currentResult += enterenedNr;
    mathOperator = '+'
  } else if (calculationOperator === 'SUBTRACT') {
    currentResult -= enterenedNr;
    mathOperator = '-'
  } else if (calculationOperator === 'MULTIPLY') {
    currentResult *= enterenedNr;
    mathOperator = '*'
  } else if (calculationOperator === 'DIVISION') {
    currentResult /= enterenedNr;
    mathOperator = '/'
  }

  outputLog(mathOperator, initialValue, currentResult);
  writeToLog(calculationOperator, initialValue, enterenedNr, currentResult);
}

function add() {
  calculateResult("ADD")
}

function subtract() {
  calculateResult("SUBTRACT")
}


function multiply() {
  calculateResult("MULTIPLY")
}
function divide() {
  calculateResult("DIVISION")
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
