const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8');
const inputArray = input.split('\n');

function filterInput(arr, idx, o2g) {
    let bitSum = 0;
    let zeros = [],
        ones = [];

    arr.forEach(line => {
        if (line.charAt(idx) === '1') {
            bitSum++;
            ones.push(line);
        } else {
            zeros.push(line);
        }
    });

    if (bitSum >= arr.length - bitSum) {
        return o2g ? ones : zeros;
    } else {
        return o2g ? zeros : ones;
    }
}

function binaryStringToDecimal(str) {
    let number = 0;
    let maxIndex = str.length - 1;
    for (let i = maxIndex; i >= 0; i--) {
        if (str.charAt(i) === '1') number += Math.pow(2, maxIndex - i);
    }
    return number;
}

let o2gArray = inputArray;
for (let i = 0; o2gArray.length > 1; i++) {
    o2gArray = filterInput(o2gArray, i, true);
}

let co2sArray = inputArray;
for (let i = 0; co2sArray.length > 1; i++) {
    co2sArray = filterInput(co2sArray, i, false);
}

console.log(`Life support rating: ${binaryStringToDecimal(o2gArray[0]) * binaryStringToDecimal(co2sArray[0])}`);
