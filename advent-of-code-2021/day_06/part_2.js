const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const lanternfish = input.split(',').map(fish => parseInt(fish));

let timesRemaining = {};

lanternfish.forEach(fish => {
    if (timesRemaining[fish]) {
        timesRemaining[fish] += 1;
    } else {
        timesRemaining[fish] = 1;
    }
});

for (let days = 0; days < 256; days++) {
    let temp = {};
    Object.entries(timesRemaining).forEach(entry => {
        const [key, value] = entry;
        if (key <= 0) {
            temp[6] = temp[6] ? temp[6] + value : value;
            temp[8] = temp[8] ? temp[8] + value : value;
        } else {
            temp[key - 1] = temp[key - 1] ? temp[key - 1] + value : value;
        }
    });
    timesRemaining = temp;
}

let numberOfFish = Object.values(timesRemaining).reduce((sum, v) => sum + v, 0);

console.log(numberOfFish);
