// Select all the calculator buttons and the display input
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

// Define a variable to hold the calculator's current state
let state = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

// Function to update the display with the current value
function updateDisplay() {
  display.value = state.displayValue;
}

// Function to handle input digit clicks
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = state;

  // Update the display value based on the current state
  if (waitingForSecondOperand === true) {
    state.displayValue = digit;
    state.waitingForSecondOperand = false;
  } else {
    state.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  // Update the display and the state
  updateDisplay();
}

// Function to handle decimal point clicks
function inputDecimal(dot) {
  const { displayValue, waitingForSecondOperand } = state;

  // Add a decimal point if one is not already present
  if (waitingForSecondOperand === true) {
    state.displayValue = '0.';
    state.waitingForSecondOperand = false;
    return;
  }

  if (!displayValue.includes(dot)) {
    state.displayValue += dot;
  }

  // Update the display and the state
  updateDisplay();
}

// Function to handle operator clicks
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = state;
  const inputValue = parseFloat(displayValue);

  if (operator && state.waitingForSecondOperand) {
    state.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    state.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    state.displayValue = `${parseFloat(result.toFixed(7))}`;
    state.firstOperand = result;
  }

  state.waitingForSecondOperand = true;
  state.operator = nextOperator;
}

// Function to perform calculations
function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

// Function to reset the calculator
function resetCalculator() {
  state = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
  };
  updateDisplay();
}

// Add event listeners to each calculator button
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) {
      return;
    }

    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'C':
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }

    // Update the display on every button click
    updateDisplay();
  });
});
