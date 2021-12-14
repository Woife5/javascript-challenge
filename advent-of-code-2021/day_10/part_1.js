const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split(/\r?\n/);

let illegalSum = 0;

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
                    switch (c) {
                        case ')':
                            illegalSum += 3;
                            break;
                        case ']':
                            illegalSum += 57;
                            break;
                        case '}':
                            illegalSum += 1197;
                            break;
                        case '>':
                            illegalSum += 25137;
                            break;

                        default:
                            break;
                    }
                }
                break;
        }
    }
});

console.log(illegalSum);
