function readUserInput(questionText) {
    const readlineSync = require('readline-sync');

    // Wait for user's response.
    return readlineSync.question(questionText);
}

function askForPositiveNumber() {
    return Number(readUserInput('Informe um numero positivo\n'));
}

function inputIsOk(input) {
    return !isNaN(input) && input > 0 && Number.isInteger(input);
}

function getInputArray() {
    let array = [];
    let input = askForPositiveNumber();

    while(inputIsOk(input)) {
        array.push(input);
        input = askForPositiveNumber();
    }

    return array;
}

 let inputNumbers = getInputArray();

// calculates the average of the numbers of the array
let average = inputNumbers.reduce((sum, value) => sum + value) / inputNumbers.length;

console.log(`media = ${average}`);