let firstOperand = '';
let secondOperand = '';
let preRounded = '';
let result = false;

let currentOperator = null;

const currentOperation = document.getElementById('current-op-screen');
const previousOperation = document.getElementById('previous-op-screen')
const operatorButtons = document.querySelectorAll('[operator-button]');
const numberButtons = document.querySelectorAll('[data-number]');
const decimalPoint = document.getElementById('point-button');
const deleteButton = document.getElementById('delete-button');
const resetButton = document.getElementById('reset-button')
const equalButton = document.getElementById('equal-button');

// Trigger function on selection of operator buttons
operatorButtons.forEach((button) => 
	button.addEventListener('click', () => setOperator(button.textContent))
)

numberButtons.forEach((button) => 
	button.addEventListener('click', () => appendNumber(button.textContent))
)

// Triggers Delete function
deleteButton.addEventListener('click', deleteNumber);
// Triggers Reset function
resetButton.addEventListener('click', resetScreen);
// Triggers Evaluate function
equalButton.addEventListener('click', evaluate);
// Triggers decimal point
decimalPoint.addEventListener('click', appendPoint);

function setOperator(operator) {
	if (currentOperation.textContent === "INVALID") {
		resetScreen();
	}
	if (currentOperator != null) evaluate()
	firstOperand = currentOperation.textContent;
	currentOperator = operator;
	previousOperation.textContent = `${firstOperand} ${currentOperator}`
	currentOperation.textContent = ' ';
}

function deleteNumber() {
	currentOperation.textContent = currentOperation.textContent.toString().slice(0, -1);
}

function resetScreen() {
	firstOperand = '';
	secondOperand = '';
	if (currentOperation.textContent === "0") {
		currentOperation.textContent = '';
	} else currentOperation.textContent = "0"
	previousOperation.textContent = '';
	result = '';
	currentOperator = null;
}

function appendNumber(number) {
	if (currentOperation.textContent === "0" || currentOperation.textContent === "INVALID") {
		resetScreen();
	}
	if (result != false) {
		previousOperation.textContent += ` = ${currentOperation.textContent}`
		currentOperation.textContent = ''
		result = false;
	}
	currentOperation.textContent += number;
}

function appendPoint() {
	if (currentOperation.textContent.includes('.')) return
	currentOperation.textContent += '.';
}

function roundDown(answer) {
	return (Math.round(answer * 100) / 100);
}

function evaluate() {
	secondOperand = currentOperation.textContent;
	if (currentOperator === null) {
		alert("No operator currently set")
		return;
	}
	if (firstOperand != '' && secondOperand != '' && currentOperation.textContent != '') {
		previousOperation.textContent = `${firstOperand} ${currentOperator} ${secondOperand}`;
		preRounded = calculate(currentOperator, firstOperand, secondOperand)
		if (preRounded != "INVALID") {
			currentOperation.textContent = roundDown(preRounded)
		} else {
			currentOperation.textContent = preRounded;
		}
		result = true
		currentOperator = null
	}
}

function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a,b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function calculate(operator, a, b) {
	a = Number(a);
	b = Number(b);
	switch(operator) {
		case '+':
			return add(a, b);
		case '-':
			return subtract(a, b);
		case 'x':
			return multiply(a, b);
		case '÷':
			if (b === 0) return "INVALID"
			else return divide(a, b);
	}
}