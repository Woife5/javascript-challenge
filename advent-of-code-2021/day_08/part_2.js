const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\n');

function getSortedString(text) {
    return text.split('').sort().join('');
}

function contains(string1, string2) {
    for (c of string2) {
        if (string1.indexOf(c) === -1) {
            return false;
        }
    }

    return true;
}

function getSolution(pattern) {
    let patternArray = pattern.split(' ');
    let solution = {};

    patternArray.sort((a, b) => a.length - b.length);
    patternArray = patternArray.map(p => getSortedString(p));

    // Get the digits that are unique
    solution[patternArray[0]] = '1';
    solution[patternArray[1]] = '7';
    solution[patternArray[2]] = '4';
    solution[patternArray[9]] = '8';

    // Get number 9
    for (let i = 3; i < 9; i++) {
        if (contains(patternArray[i], patternArray[2]) && patternArray[i].length === 6) {
            solution[patternArray[i]] = '9';
            patternArray[i] = '';
            break;
        }
    }

    // Get number 6
    let number6 = null;
    for (let i = 3; i < 9; i++) {
        if (!contains(patternArray[i], patternArray[0]) && patternArray[i].length === 6) {
            solution[patternArray[i]] = '6';
            number6 = patternArray[i];
            patternArray[i] = '';
            break;
        }
    }

    // Get number 0
    for (let i = 3; i < 9; i++) {
        if (patternArray[i].length === 6) {
            solution[patternArray[i]] = '0';
            patternArray[i] = '';
            break;
        }
    }

    // Get number 3
    for (let i = 3; i < 6; i++) {
        if (contains(patternArray[i], patternArray[0])) {
            solution[patternArray[i]] = '3';
            patternArray[i] = '';
            break;
        }
    }

    // Get number 5
    for (let i = 3; i < 6; i++) {
        if (patternArray[i].length === 0) continue;

        let missing = 0;

        for (c of patternArray[i]) {
            if (number6.indexOf(c) === -1) {
                missing++;
            }
        }

        if (missing === 0) {
            solution[patternArray[i]] = '5';
            patternArray[i] = '';
            break;
        }
    }

    // Get the last one (2)
    for (let i = 3; i < 6; i++) {
        if (patternArray[i].length > 0) {
            solution[patternArray[i]] = '2';
            break;
        }
    }

    return solution;
}

let totalSum = 0;
inputArray.forEach(line => {
    const [pattern, digits] = line.split(' | ');
    const digitArray = digits.split(' ').map(e => getSortedString(e));

    const solution = getSolution(pattern);

    let number = '';
    digitArray.forEach(digit => {
        number += solution[digit];
    });

    totalSum += parseInt(number);
});

console.log(totalSum);
