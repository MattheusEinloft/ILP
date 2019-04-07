function repeat(n, action) {
    for(let i = 0; i < n; i++){
        action(i);
    }
}

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

function response(question) {
    return stringToNumber(readUserInput(question));
}

function getInputArray() {
    let array = [];
    let res;

    repeat(10, i => {
        res = response('Informe um numero: ');

        while(!isNumber(res)) {
            res = response('Entrada nao eh um numero. Informe novamente: ');
        }
        array.push(res);
    })

    return array;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isEven(number) {
    return number % 2 === 0;
}

function filterOdds(array) {
    return array.filter(isOdd);
}

function filterEvens(array) {
    return array.filter(isEven);
}

function sum(array) {
    return array.reduce(function(sum, value) {
        return sum + value;
    });
}

function average(array) {
    return array.reduce(function(sum, value) {
        return sum + value;
    }) / array.length;
}

let inputNumbers = getInputArray();
let odds = filterOdds(inputNumbers);
let evens = filterEvens(inputNumbers);

console.log(`\nImpares = ${odds}`);
console.log(`Quantidade de impares: ${odds.length}`);
console.log(`Media de impares: ${average(odds)}`)

console.log(`\nPares = ${evens}`);
console.log(`Quantidade de pares: ${evens.length}`);
console.log(`Soma de pares: ${sum(evens)}`)
