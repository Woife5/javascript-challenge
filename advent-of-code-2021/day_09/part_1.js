const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split(/\r?\n/);

function isLowpoint(matrix, coords) {
    const [x, y] = coords;
    const element = matrix[x][y];

    if (
        (x > 0 && matrix[x - 1][y] <= element) ||
        (y < matrix[x].length - 1 && matrix[x][y + 1] <= element) ||
        (x < matrix.length - 1 && matrix[x + 1][y] <= element) ||
        (y > 0 && matrix[x][y - 1] <= element)
    ) {
        return false;
    } else {
        return true;
    }
}

const matrix = [];
let riskLevelSum = 0;

inputArray.forEach(line => {
    matrix.push(line.split('').map(Number));
});

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (isLowpoint(matrix, [i, j])) {
            riskLevelSum += 1 + matrix[i][j];
        }
    }
}

console.log(riskLevelSum);
