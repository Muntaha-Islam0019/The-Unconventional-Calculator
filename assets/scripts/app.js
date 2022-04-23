const defaultResult = 0;

let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

let number1 = 19;
let number2 = 47;

currentResult = add(number1, number2);

// backtick gives ${} ability
// this construct is called template literal
// whitespace is allowed
let calculatorDescription = `${number1} + ${number2}`;

outputResult(currentResult, calculatorDescription);
