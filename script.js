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
      if(displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('/') || displayValue.includes('X')) {
        parseDisplayValue();
        let result = operate(firstNumber, secondNumber, operator);
        displayValue = result.toString();
      }

      displayValue += button.textContent;
      updateDisplay();
    };

    if(isNaN(lastChar)){
      displayValue = displayValue.slice(0, -1);
      displayValue += button.textContent;
      updateDisplay();
    }
  });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  displayValue = '';
  firstNumber = '';
  secondNumber = '';
  operator = '';
  updateDisplay();
});

const calculateButton = document.querySelector('#operate');
calculateButton.addEventListener('click', () => {
  parseDisplayValue();
  console.log(firstNumber,secondNumber,operator);
  if(firstNumber !== '' && secondNumber !== '' && operator !== ''){
    let result = operate(firstNumber, secondNumber, operator);
    displayValue = result.toString();
    updateDisplay();
    firstNumber = '';
    secondNumber = '';
    operator = '';
  } else {
    return
  }
  console.log(firstNumber,secondNumber,operator)
})

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', () => {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
})

// Handle keyboard support
addEventListener('keydown', (event) => {
  const key = event.key

  // Handle number input
  if(!isNaN(parseInt(key))){
    displayValue += key;
    updateDisplay();
  };

  // Handle operator input
  if(['+','-','/','X'].includes(key)){
    const lastChar = displayValue[displayValue.length -1];
    if(!isNaN(lastChar)){
      if(displayValue.includes('+') || displayValue.includes('-') || displayValue.includes('/') || displayValue.includes('X')){
        parseDisplayValue();
        displayValue = operate(firstNumber, secondNumber, operator).toString();
      }
      displayValue += key;
      updateDisplay();
    };
    if(isNaN(lastChar)){
      displayValue = displayValue.slice(0, -1);
      displayValue += key;
      updateDisplay();
    };
  };

  // Handle Backspace input
  if(key === 'Backspace'){
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  };

  // Handle Enter input
  if(key === 'Enter'){
    parseDisplayValue();
    if(firstNumber !== '' && secondNumber !== '' && operator !== ''){
      let result = operate(firstNumber, secondNumber, operator);
      displayValue = result.toString();
      updateDisplay();
      firstNumber = '';
      secondNumber = '';
      operator = '';
    } else {
      return
    }   
  }
});

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
  document.querySelector('#displayText').innerText = displayValue;
}

function add(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc + num
  })
  return +result.toFixed(2)
}

function subtract(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc - num
  })
  return +result.toFixed(2)
}

function multiply(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc * num
  })
  return +result.toFixed(2)
}

function divide(...nums) {
  const result = nums.reduce((acc, num) => {
    return acc / num
  })
  return +result.toFixed(2)
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
      if(parseFloat(num2) === 0){
        return 'NOPE';
      } else {
        return divide(parseFloat(num1), parseFloat(num2));
      }
  };
};