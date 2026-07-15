const previousText = document.getElementById('previous');
const currentText = document.getElementById('current');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const clearButton = document.querySelector('[data-action="clear"]');
const deleteButton = document.querySelector('[data-action="delete"]');
const equalsButton = document.querySelector('[data-action="equals"]');

let current = '';
let previous = '';
let operation = null;

function updateDisplay() {
  currentText.textContent = current || '0';
  previousText.textContent = previous ? `${previous} ${operation || ''}` : '';
}

function appendNumber(n) {
  if (n === '.' && current.includes('.')) return;
  if (current.length > 16) return;
  current += n;
}

function chooseOperation(op) {
  if (current === '' && previous === '') return;

  if (previous !== '') {
    compute();
  } else {
    previous = current;
  }

  operation = op;
  current = '';
}

function compute() {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);

  if (isNaN(prev) || isNaN(curr)) return;

  let result;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;

    case '-':
      result = prev - curr;
      break;

    case '*':
      result = prev * curr;
      break;

    case '/':
      result = curr === 0 ? 'Error' : prev / curr;
      break;

    default:
      return;
  }

  previous = result.toString();
  current = '';
  operation = null;
}

function clearAll() {
  current = '';
  previous = '';
  operation = null;
}

function deleteOne() {
  current = current.slice(0, -1);
}

numberButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    appendNumber(btn.textContent);
    updateDisplay();
  });
});

operationButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    chooseOperation(btn.dataset.operation);
    updateDisplay();
  });
});

clearButton.addEventListener('click', () => {
  clearAll();
  updateDisplay();
});

deleteButton.addEventListener('click', () => {
  deleteOne();
  updateDisplay();
});

equalsButton.addEventListener('click', () => {
  if (operation && current !== '') {
    compute();
  }
  updateDisplay();
});

document.addEventListener('keydown', e => {
  if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
    appendNumber(e.key);
    updateDisplay();
  }

  if (['+', '-', '*', '/'].includes(e.key)) {
    chooseOperation(e.key);
    updateDisplay();
  }

  if (e.key === 'Enter') {
    if (operation && current !== '') {
      compute();
    }
    updateDisplay();
  }

  if (e.key === 'Backspace') {
    deleteOne();
    updateDisplay();
  }

  if (e.key === 'Escape') {
    clearAll();
    updateDisplay();
  }
});

updateDisplay();
