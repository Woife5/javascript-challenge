const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const lanternfish = input.split(',').map(fish => parseInt(fish));

for (let i = 0; i < 80; i++) {
    let initialLength = lanternfish.length;
    for (let idx = 0; idx < initialLength; idx++) {
        if (lanternfish[idx] === 0) {
            lanternfish.push(8);
            lanternfish[idx] = 6;
        } else {
            lanternfish[idx] -= 1;
        }
    }
}

console.log(lanternfish.length);
