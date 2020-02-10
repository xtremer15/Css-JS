const defaultResult = 0;
let currentResult = defaultResult;
currentResult += 10 - 1 + 2;
function add(num1, num2) {
  const result = num1 + num2;
  alert("The result is " + result);
}

add(2, 3);
add(5, 3);

const calcuationDescription = ` (${defaultResult} + 10  ) - 1 + 2`;
outputResult(currentResult, calcuationDescription);
