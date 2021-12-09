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

function resetVisited() {
    for (let i = 0; i < visited.length; i++) {
        for (let j = 0; j < visited[i].length; j++) {
            visited[i][j] = false;
        }
    }
}

function getBasinSize(x, y, prev = -1) {
    if (x < 0 || y < 0 || x >= matrix.length || y >= matrix[x].length || visited[x][y] || matrix[x][y] === 9) {
        return 0;
    }

    visited[x][y] = true;
    return (
        1 +
        getBasinSize(x + 1, y, prev + 1) +
        getBasinSize(x - 1, y, prev + 1) +
        getBasinSize(x, y + 1, prev + 1) +
        getBasinSize(x, y - 1, prev + 1)
    );
}

const matrix = [];
const visited = [];
let basins = [];

inputArray.forEach(line => {
    matrix.push(line.split('').map(Number));
    visited.push(line.split('').map(e => false));
});

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (isLowpoint(matrix, [i, j])) {
            basins.push(getBasinSize(i, j, matrix[i][j] - 1));
            resetVisited();
        }
    }
}

basins.sort((a, b) => b - a);

let result = basins.shift() * basins.shift() * basins.shift();

console.log(result);
