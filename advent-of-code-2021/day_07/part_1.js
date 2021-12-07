const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const positions = input.split(',').map(Number);

const max = positions.reduce((m, p) => (m > p ? m : p));
const min = positions.reduce((m, p) => (m < p ? m : p));

let bestPos = min;
let bestFuelUsage = positions.reduce((f, p) => f + Math.abs(p - min), 0);
for (let i = min + 1; i < max; i++) {
    let fuel = positions.reduce((f, p) => f + Math.abs(p - i), 0);
    if (fuel < bestFuelUsage) {
        bestPos = i;
        bestFuelUsage = fuel;
    }
}

console.log(bestPos);
console.log(bestFuelUsage);
