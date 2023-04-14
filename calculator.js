
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let operand1 = '';
let operand2 = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

function handleClick(e) {
  const value = e.target.value;

  if (value === 'C') {
    clear();
  } else if (value === '←') {
    deleteLast();
  } else if (isNumber(value) || value === '.') {
    handleNumber(value);
  } else if (isOperator(value)) {
    handleOperator(value);
  } else if (value === '=') {
    handleEquals();
  }

  display.value = operand1;
}

function clear() {
  operand1 = '';
  operand2 = '';
  operator = '';
}

function deleteLast() {
  if (operator) {
    operand2 = operand2.slice(0, -1);
    display.value = operand2;
  } else {
    operand1 = operand1.slice(0, -1);
    display.value = operand1;
  }
}

function isNumber(value) {
  return !isNaN(value);
}

function isOperator(value) {
  return value === '+' || value === '-' || value === 'x' || value === '÷';
}

function handleNumber(value) {
  if (operator) {
    operand2 += value;
    display.value = operand2;
  } else {
    operand1 += value;
    display.value = operand1;
  }
}

function handleOperator(value) {
  operator = value;
}

function handleEquals() {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);

  switch (operator) {
    case '+':
      operand1 = num1 + num2;
      break;
    case '-':
      operand1 = num1 - num2;
      break;
    case 'x':
      operand1 = num1 * num2;
      break;
    case '÷':
      operand1 = num1 / num2;
      break;
  }

  operand2 = '';
  operator = '';
}
