let firstNumber
let secondNumber
let operator
let displayValue

const displayDiv = document.querySelector('div#displayText');

function add(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc + num
  })
  return result
}

function subtract(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc - num
  })
  return result
}

function multiply(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc * num
  })
  return result
}

function divide(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc / num
  })
  return result
}

function operate(num1, num2, operator) {
  switch(operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case 'x':
      return multiply (num1,num2);
    case '/':
      return divide(num1, num2);
  };
};