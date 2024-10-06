function appendToResult(value) {
    // Append value to result
    document.getElementById('result').value += value;
}

function clearAll() {
    document.getElementById('result').value = ''; // Clear the entire display
}

function clearLast() {
    const currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1); // Clear the last character
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value); // Evaluate the expression
        document.getElementById('result').value = result; // Display the result
    } catch (error) {
        document.getElementById('result').value = 'Error'; // Display error on invalid input
    }
}
