let firstNumber
let secondNumber
let operator
let displayValue = '';

const numberDiv = document.querySelectorAll('div.number');
numberDiv.forEach((button) => {
  button.addEventListener('click', () => {
    displayValue += button.getAttribute('id')
    updateDisplay();
  });
});

const operatorDiv = document.querySelectorAll('.operator');
operatorDiv.forEach((button) => {
  button.addEventListener('click', () => {
    const lastChar = displayValue[displayValue.length -1];
    if(!isNaN(parseInt(lastChar))) {
      displayValue += ` ${button.textContent} `;
      updateDisplay();
    };
  });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  displayValue = '';
  updateDisplay();
});

const calculateButton = document.querySelector('#operate');
calculateButton.addEventListener('click', () => {
  let result = operate(firstNumber, secondNumber, operator);
  displayValue = result;
  updateDisplay();
})

function parseDisplayValue() {
  let operatorIndex = -1;
  for(let i = 0; i < displayValue.length; i++){
    if(displayValue[i] === '+' || displayValue[i] === 'X' || displayValue[i] === "/" || displayValue[i] === '-'){
      operatorIndex = i;
      break;
    };
  };

  if(operatorIndex !== -1){
    firstNumber = displayValue.substring(0, operatorIndex).trim();
    secondNumber = displayValue.substring(operatorIndex + 1).trim();
    operator = displayValue[operatorIndex];
  };
}

function updateDisplay() {
  parseDisplayValue();
  document.querySelector('#displayText').innerText = displayValue;
  console.log(firstNumber, operator, secondNumber);
}

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
      return add(parseFloat(num1), parseFloat(num2));
    case '-':
      return subtract(parseFloat(num1), parseFloat(num2));
    case 'X':
      return multiply(parseFloat(num1),parseFloat(num2));
    case '/':
      return divide(parseFloat(num1), parseFloat(num2));
  };
};