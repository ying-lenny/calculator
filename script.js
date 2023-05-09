let currentOp = null;

const currentOperation = document.getElementById('current-op-screen');
const operatorButtons = document.querySelectorAll('[operator-button]');
const numberButtons = document.querySelectorAll('[data-number]');
const deleteButton = document.getElementById('delete-button');
const resetButton = document.getElementById('reset-button')

// Trigger function on selection of operator buttons
operatorButtons.forEach((button) => 
	button.addEventListener('click', () => test(button.textContent))
)

numberButtons.forEach((button) => 
	button.addEventListener('click', () => appendNumber(button.textContent))
)

// Triggers Delete function
deleteButton.addEventListener('click', deleteNumber);
// Triggers Reset function
resetButton.addEventListener('click', resetScreen);

function test(operator) {
	calculate(operator)
}

function deleteNumber() {
	currentOperation.textContent = currentOperation.textContent.toString().slice(0, -1);
}

function resetScreen() {
	currentOperation.textContent = 0
}

function appendNumber(number) {
	currentOperation.textContent += number;
}

function calculate(operator) {
	switch(operator) {
		case '+':
			console.log(`Add: ${operator}`)
			return;
		case '-':
			console.log(`Subtract: ${operator}`)
			return;
		case 'X':
			console.log(`Multiply: ${operator}`)
			return;
		case '÷':
			console.log(`Divide: ${operator}`)
			return;
	}
}