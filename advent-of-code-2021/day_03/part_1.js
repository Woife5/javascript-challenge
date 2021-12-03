const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\n');

let bitSums = [];
for (let c of inputArray[0]) {
    bitSums.push(0);
}

inputArray.forEach(line => {
    for (let i = 0; i < line.length; i++) {
        if (line.charAt(i) === '1') {
            bitSums[i]++;
        }
    }
});

let gamma = bitSums.map(e => e > inputArray.length - e);
let epsilon = bitSums.map(e => e < inputArray.length - e);

function boolArrayToDecimal(arr) {
    let number = 0;
    let maxIndex = arr.length - 1;
    for (let i = maxIndex; i >= 0; i--) {
        if (arr[i]) number += Math.pow(2, maxIndex - i);
    }
    return number;
}

console.log(`Power consumption: ${boolArrayToDecimal(gamma) * boolArrayToDecimal(epsilon)}`);
