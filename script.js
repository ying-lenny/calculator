


const operatorButtons = document.querySelectorAll('[operator-button]')
const deleteButton = document.getElementById('delete-button')

// Trigger function on selection of operator buttons
operatorButtons.forEach((button) => 
	button.addEventListener('click', () => test(button.textContent))
)

// Triggers Delete function
deleteButton.addEventListener('click', deleteNumber)

function test(operator) {
	console.log(`Hi, you selected ${operator}`)
}

function deleteNumber() {
	console.log("Hello")
}