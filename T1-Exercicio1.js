function repeat(n, action) {
    for(let i = 0; i < n; i++){
        action(i);
    }
}

function isOdd(number) {
    return number % 2 !== 0;
}

let numerators = [];
repeat(100, num => {
    if(isOdd(num)) {
        numerators.push(num);
    }
});

let s = 0;
repeat(50, i => {
    s = s + numerators[i] / (i+1);
});

console.log(s);