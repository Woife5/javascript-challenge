const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\n');

let totalOccurrences = 0;

inputArray.forEach(line => {
    const [pattern, digits] = line.split(' | ');
    const digitArray = digits.split(' ');

    digitArray.forEach(digit => {
        if (digit.length === 2 || digit.length === 3 || digit.length === 7 || digit.length === 4) {
            totalOccurrences++;
        }
    });
});

console.log(totalOccurrences);
