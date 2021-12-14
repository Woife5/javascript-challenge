const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split(/\r?\n/);

const octopusGrid = [];
let flashedGrid = [];
let totalFalshes = 0;

function resetFlashed() {
    for (let i = 0; i < flashedGrid.length; i++)
        for (let j = 0; j < flashedGrid[i].length; j++) flashedGrid[i][j] = false;
}

function tick(x, y) {
    if (x >= octopusGrid.length || x < 0 || y >= octopusGrid[x].length || y < 0) return;
    if (flashedGrid[x][y]) return;

    octopusGrid[x][y] += 1;

    if (octopusGrid[x][y] > 9) {
        flash(x, y);
    }
}

function flash(x, y) {
    if (x >= octopusGrid.length || x < 0 || y >= octopusGrid[x].length || y < 0) return;
    if (flashedGrid[x][y]) return;

    flashedGrid[x][y] = true;
    octopusGrid[x][y] = 0;
    totalFalshes += 1;

    tick(x + 1, y);
    tick(x - 1, y);
    tick(x, y + 1);
    tick(x, y - 1);

    tick(x + 1, y + 1);
    tick(x - 1, y - 1);
    tick(x - 1, y + 1);
    tick(x + 1, y - 1);
}

function oneStep() {
    for (let i = 0; i < octopusGrid.length; i++) {
        for (let j = 0; j < octopusGrid[i].length; j++) {
            octopusGrid[i][j] += 1;
        }
    }

    for (let i = 0; i < octopusGrid.length; i++) {
        for (let j = 0; j < octopusGrid[i].length; j++) {
            if (octopusGrid[i][j] > 9) {
                flash(i, j);
            }
        }
    }

    resetFlashed();
}

inputArray.forEach(line => {
    octopusGrid.push(line.split('').map(Number));
    flashedGrid.push(line.split('').map(() => false));
});

for (let i = 0; i < 100; i++) {
    oneStep();
}

console.log(totalFalshes);
