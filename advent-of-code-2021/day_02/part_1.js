const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\n');

let depth = 0;
let horizontal = 0;

inputArray.forEach(line => {
    let [command, distance] = line.split(' ');
    distance = parseInt(distance);

    switch (command) {
        case 'forward':
            horizontal += distance;
            break;
        case 'down':
            depth += distance;
            break;
        case 'up':
            depth -= distance;
            break;
        default:
            console.error('Error, unknown command!');
            break;
    }
});

console.log(`distance: ${depth * horizontal}`);
