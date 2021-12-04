const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\n');

const draws = inputArray.shift().split(',');

class Board {
    constructor(rows) {
        this.numbers = rows;
        this.hitNumbers = [];

        for (const row of rows) {
            let temp = [];
            for (const nuber of row) {
                temp.push(false);
            }
            this.hitNumbers.push(temp);
        }
    }

    sumAllUnmarked() {
        let sum = 0;
        for (let i = 0; i < this.hitNumbers.length; i++) {
            for (let j = 0; j < this.hitNumbers[i].length; j++) {
                if (!this.hitNumbers[i][j]) {
                    sum += this.numbers[i][j];
                }
            }
        }
        return sum;
    }

    hitNumber(num) {
        for (let i = 0; i < this.numbers.length; i++) {
            for (let j = 0; j < this.numbers[i].length; j++) {
                if (this.numbers[i][j] === num) {
                    this.hitNumbers[i][j] = true;
                }
            }
        }

        return this.checkIfIWon();
    }

    checkIfIWon() {
        for (let row = 0; row < 5; row++) {
            if (
                this.hitNumbers[row][0] &&
                this.hitNumbers[row][1] &&
                this.hitNumbers[row][2] &&
                this.hitNumbers[row][3] &&
                this.hitNumbers[row][4]
            ) {
                return true;
            }
        }
        for (let col = 0; col < 5; col++) {
            if (
                this.hitNumbers[0][col] &&
                this.hitNumbers[1][col] &&
                this.hitNumbers[2][col] &&
                this.hitNumbers[3][col] &&
                this.hitNumbers[4][col]
            ) {
                return true;
            }
        }
        return false;
    }
}

// Load all boards from input
let boards = [];
let temp = [];
inputArray.shift();
inputArray.forEach(row => {
    if (!row) {
        boards.push(new Board(temp));
        temp = [];
    } else {
        let tempRow = [];
        for (let i = 0; i < row.length; i += 3) {
            tempRow.push(parseInt(row.substr(i, 2)));
        }
        temp.push(tempRow);
    }
});
boards.push(new Board(temp));

// Not run through the array of number and mark the hit ones.
draws.forEach(draw => {
    boards.forEach(board => {
        if (board.hitNumber(parseInt(draw))) {
            console.log(`Found winning board, score: ${board.sumAllUnmarked() * parseInt(draw)}`);
            process.exit(0);
        }
    });
});
