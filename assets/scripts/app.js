const defaultResult = 0

let currentResult = defaultResult;
currentResult = currentResult + 10 + 19 - 9 / 3;

// backtick gives ${} ability
// this construct is called template literal
// whitespace is allowed
let calculatorDescription = `(${defaultResult} + 10) + 19 - 9 / 3`;

outputResult(currentResult, calculatorDescription);
