const defaultResult = 0;
let currentResult = defaultResult;
currentResult += 10 - 1 + 2;
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(2, 3);


const calcuationDescription = ` (${defaultResult} + 10  ) - 1 + 2`;
outputResult(currentResult, calcuationDescription);
