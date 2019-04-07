// npm install readline-sync

function readUserInput(questionText) {
    const readlineSync = require('readline-sync');

    // Wait for user's response.
    return readlineSync.question(questionText);
}

function isNumber(num) {
    return !isNaN(num);
}

function isPositive(num) {
    return num > 0;
}

function stringToNumber(str) {
    return Number(str);
}

function response() {
    return stringToNumber(readUserInput('Informe um numero positivo\n'));
}

function getInputArray() {
    let array = [];
    let res = response();
    let run = true;

    while(isNumber(res) && run) {
        if(isPositive(res)) {
            array.push(res);
            res = response();
        }
        else {
            run = false;
        }
    }

    return array;
}

function average(array) {
    return array.reduce(function(sum, value) {
        return sum + value;
    }) / array.length;
}

let inputNumbers = getInputArray();

console.log(`media = ${average(inputNumbers)}`);