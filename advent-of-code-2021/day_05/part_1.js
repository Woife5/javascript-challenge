const fs = require('fs');

const input = fs.readFileSync('./test.txt', 'utf8');
const inputArray = input.split('\n');

let max = 0;

// Get the max size for the area
inputArray.forEach(line => {
    const [start, end] = line.split(' -> ');
    let numbers = start.split(',');
    numbers.push(...end.split(','));
    numbers.map(num => parseInt(num));

    if (max <= Math.max(...numbers)) {
        max = Math.max(...numbers) + 1;
    }
});

let dat = [];
for (let x = 0; x < max; x++) {
    let temp = [];
    for (let y = 0; y < max; y++) {
        temp.push(0);
    }
    dat.push(temp);
}

function updateDat(x1, y1, x2, y2) {
    dat[y1][x1]++;

    if (x1 === x2 && y1 === y2) return;

    if (x1 === x2) {
        y1 = y1 < y2 ? y1 + 1 : y1 - 1;
    } else {
        x1 = x1 < x2 ? x1 + 1 : x1 - 1;
    }

    updateDat(x1, y1, x2, y2);
}

inputArray.forEach(line => {
    const [start, end] = line.split(' -> ');
    let [x1, y1] = start.split(',').map(n => parseInt(n));
    let [x2, y2] = end.split(',').map(n => parseInt(n));

    if (x1 === x2 || y1 === y2) {
        updateDat(x1, y1, x2, y2);
    }
});

let overlap = dat.reduce((sum, el) => {
    return sum + el.reduce((s, e) => (e >= 2 ? s + 1 : s), 0);
}, 0);

console.log(overlap);
