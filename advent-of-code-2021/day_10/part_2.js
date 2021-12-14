const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split(/\r?\n/);

const totalPoints = [];

inputArray.forEach(line => {
    const paranthesies = [];

    for (let c of line) {
        switch (c) {
            case '(':
                paranthesies.push(')');
                break;
            case '[':
                paranthesies.push(']');
                break;
            case '{':
                paranthesies.push('}');
                break;
            case '<':
                paranthesies.push('>');
                break;

            default:
                if (c !== paranthesies.pop()) {
                    // Do not count this line, its corrupted
                    return;
                }
                break;
        }
    }

    let points = 0;
    while (paranthesies.length > 0) {
        points *= 5;

        switch (paranthesies.pop()) {
            case ')':
                points += 1;
                break;
            case ']':
                points += 2;
                break;
            case '}':
                points += 3;
                break;
            case '>':
                points += 4;
                break;

            default:
                break;
        }
    }

    totalPoints.push(points);
});

totalPoints.sort((a, b) => b - a);

console.log(totalPoints[Math.floor(totalPoints.length / 2)]);
