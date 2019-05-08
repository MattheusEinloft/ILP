// creates an array of 50 odd numbers, starting at 1 and ending at 99
function fillNumeratorsList() {
    return [...new Array(50)].fill(1).map((value, index) => value + (index * 2));
}

// creates an array of 50 numbers, starting at 1 and ending at 50
function filDenominatorsList() {
    return [...new Array(50)].fill(1).map((value, index) => value + index);
}

function calculateValueOfS() {
    let numerators = fillNumeratorsList();
    let denominators = filDenominatorsList();

    // creates an array of numerators divided by their corresponding denominators
    let numDivDenList = numerators.map((num, index) => num / denominators[index]);

    // returns the sum of all the values of the array numDivDenList
    return numDivDenList.reduce((partial_sum, value) => partial_sum + value, 0);
}

console.log(calculateValueOfS());