const defaultResult = 0;

let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  alert('The result is : ' + result);
}

add(19, 47);

currentResult = currentResult + 10 + 19 - 9 / 3;

// backtick gives ${} ability
// this construct is called template literal
// whitespace is allowed
let calculatorDescription = `(${defaultResult} + 10) + 19 - 9 / 3`;

outputResult(currentResult, calculatorDescription);
