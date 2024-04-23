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
    displayValue += button.textContent;
    updateDisplay();
  });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  displayValue = '';
  updateDisplay();
});


function updateDisplay() {
  document.querySelector('#displayText').innerText = displayValue;
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
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case 'x':
      return multiply (num1,num2);
    case '/':
      return divide(num1, num2);
  };
};