const fs = require('fs');
const Cave = require('./Cave');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split(/\r?\n/);

const caves = new Map();

function addConnection(c1, c2) {
    if (!caves.has(c1)) caves.set(c1, new Cave(c1));
    if (!caves.has(c2)) caves.set(c2, new Cave(c2));

    caves.get(c1).addConnection(caves.get(c2));
}

inputArray.forEach(line => {
    const [c1, c2] = line.split('-');
    addConnection(c1, c2);
});

const possibleWays = [];
function findAllWays(cave, currentPos = '', visited = new Set()) {
    if (cave.name === 'end') {
        possibleWays.push(`${currentPos}end`);
        return;
    }

    visited.add(cave.name);

    for (let con of cave.connections) {
        if (!visited.has(con.name) || con.isUpper) {
            findAllWays(con, `${currentPos}${cave.name},`, new Set(visited));
        }
    }
}

findAllWays(caves.get('start'));

console.log(possibleWays.length);
