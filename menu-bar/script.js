let currentOperation = '';

function showOperation(operation) {
    const operationTitle = document.getElementById('operationTitle');
    const operationForm = document.getElementById('operationForm');
    const numInputs = document.getElementById('numInputs');
    
    currentOperation = operation;
    switch (operation) {
        case 'add':
            operationTitle.innerText = 'Addition';
            numInputs.classList.remove('hidden');
            break;
        case 'subtract':
            operationTitle.innerText = 'Subtraction';
            numInputs.classList.remove('hidden');
            break;
        case 'multiply':
            operationTitle.innerText = 'Multiplication';
            numInputs.classList.remove('hidden');
            break;
        case 'divide':
            operationTitle.innerText = 'Division';
            numInputs.classList.remove('hidden');
            break;
        case 'modulus':
            operationTitle.innerText = 'Modulus';
            numInputs.classList.remove('hidden');
            break;
        case 'power':
            operationTitle.innerText = 'Power';
            numInputs.classList.remove('hidden');
            break;
        case 'sqrt':
            operationTitle.innerText = 'Square Root';
            numInputs.classList.add('hidden'); // Only one input is required for square root
            break;
        default:
            operationTitle.innerText = '';
            break;
    }

    operationForm.classList.remove('hidden');
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultText = document.getElementById('result');

    if (isNaN(num1) && currentOperation !== 'sqrt') {
        resultText.innerText = 'Please enter valid numbers';
        return;
    }

    let result;
    switch (currentOperation) {
        case 'add':
            result = num1 + num2;
            resultText.innerText = `The sum is: ${result}`;
            break;
        case 'subtract':
            result = num1 - num2;
            resultText.innerText = `The difference is: ${result}`;
            break;
        case 'multiply':
            result = num1 * num2;
            resultText.innerText = `The product is: ${result}`;
            break;
        case 'divide':
            result = num1 / num2;
            resultText.innerText = `The quotient is: ${result}`;
            break;
        case 'modulus':
            result = num1 % num2;
            resultText.innerText = `The modulus is: ${result}`;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            resultText.innerText = `The result is: ${result}`;
            break;
        case 'sqrt':
            const sqrtNum = parseFloat(document.getElementById('num1').value);
            result = Math.sqrt(sqrtNum);
            resultText.innerText = `The square root is: ${result}`;
            break;
        default:
            resultText.innerText = 'Operation not supported';
            break;
    }
}
