function readUserInput(questionText) {
    const readlineSync = require('readline-sync');

    // wait for user's response
    return readlineSync.question(questionText);
}

// asks the user an question
function askTheUser(question) {
    return Number(readUserInput(question));
}

// returns true if the input is a number and is a integer
function inputIsOk(input) {
    return !isNaN(input) && Number.isInteger(input);
}

// reads 10 numbers and add them to an array
function getInputArray() {
    let array = [];

    for(let i = 0; i < 10; i++) {
        let input = askTheUser('Informe um numero: ');

        while(!inputIsOk(input)) {
            input = askTheUser('Entrada nao eh um numero. Informe novamente: ');
        }

        array.push(input);
    }

    return array;
}

let inputNumbers = getInputArray();

// filters the odd numbers of the list
let odds = inputNumbers.filter(num => num % 2 !== 0);

// filters the even numbers of the list
let evens = inputNumbers.filter(num => num % 2 === 0);

console.log(`\nImpares = ${odds}`);
console.log(`Quantidade de impares: ${odds.length}`);
console.log(`Media de impares: ${odds.reduce((sum, value) => sum + value) / odds.length}`)

console.log(`\nPares = ${evens}`);
console.log(`Quantidade de pares: ${evens.length}`);
console.log(`Soma de pares: ${evens.reduce((sum, value) => sum + value)}`);