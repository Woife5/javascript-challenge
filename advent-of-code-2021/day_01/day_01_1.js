const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\n');

let increases = 0;
for (let i = 1; i < inputArray.length; i++) {
    if (parseInt(inputArray[i - 1]) < parseInt(inputArray[i])) {
        increases++;
    }
}

console.log(`increases: ${increases}`);
