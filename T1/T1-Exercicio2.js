function readUserInput(questionText) {
    const readlineSync = require('readline-sync');

    // wait for user's response
    return readlineSync.question(questionText);
}

// asks the user to input positive numbers
function askForPositiveNumber() {
    return Number(readUserInput('Informe um numero positivo\n'));
}

// returns true if the input is a number, is positive and is a integer
function inputIsOk(input) {
    return !isNaN(input) && input > 0 && Number.isInteger(input);
}

// loops while the user inputs positive numbers and add them to an array
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