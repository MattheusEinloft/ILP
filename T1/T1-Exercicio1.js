function repeat(n, action) {
    for(let i = 0; i < n; i++){
        action(i);
    }
}

function isOdd(number) {
    return number % 2 !== 0;
}

function fillNumeratorsList() {
    let numerators = [];
    repeat(100, num => {
        if(isOdd(num)) {
            numerators.push(num);
        }
    });

    return numerators;
}

function calculateValueOfS() {
    let numerators = fillNumeratorsList();

    let s = 0;
    repeat(50, i => {
        s = s + numerators[i] / (i+1);
    });

    return s;
}

console.log(calculateValueOfS());

// let denominators = [...new Array(50)].fill(1);

// // fill denominators
//   denominators = denominators.map((value, index) => value + index);
  
//   s = numerators.reduce((partial_sum, value) => partial_sum + value, 0);
