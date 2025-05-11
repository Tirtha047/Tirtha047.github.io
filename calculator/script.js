let currentInput = '';
let history = [];

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = currentInput;
}

function appendToDisplay(value) {
  if (value === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function calculateResult() {
  try {
    const result = eval(currentInput);
    history.push(currentInput + ' = ' + result);
    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
    updateHistory();
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function updateHistory() {
  const historyContainer = document.getElementById('history');
  historyContainer.innerHTML = history.join('<br>');
}

// Adding keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
  } else if ('+-*/.'.includes(key)) {
    appendToDisplay(key);
  }
});
