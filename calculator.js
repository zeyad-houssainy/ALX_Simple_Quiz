const { parseSync } = require("@babel/core");

// Implement Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

// Attach Event Listeners.
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById("subtract").addEventListener("click", () => {
    const number1 = parseFloat(document.getElementbyId("number1").value) || 0;
    const number2 = parseFloat(document.getElementbyId("number2").value) || 0;
    const result = subtract(number1, number2)
    document.getElementById("calculation-result").textContent = result
})

document.getElementById("multiply").addEventListener("click", () => {
    const number1 = parseFloat(document.getElementbyId("number1").value) || 0;
    const number2 = parseFloat(document.getElementbyId("number2").value) || 0;
    const result = multiply(number1, number2)
    document.getElementById("calculation-result").textContent = result
})

document.getElementById("divide").addEventListener("click", () => {
    const number1 = parseFloat(document.getElementbyId("number1").value) || 0;
    const number2 = parseFloat(document.getElementbyId("number2").value) || 0;
    const result = divide(number1, number2)
    document.getElementById("calculation-result").textContent = result
})