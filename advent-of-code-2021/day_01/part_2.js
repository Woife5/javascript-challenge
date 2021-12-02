const fs = require('fs');
const SLIDING_WINDOW_SIZE = 3;

function sumArray(array) {
    return array.reduce((sum, value) => sum + parseInt(value), 0);
}

const input = fs.readFileSync('./input.txt', 'utf8').split('\n');

let slidingWindowArray = [];

// Go to length+1 because slice(start, end) is exclusive of end
for (let i = SLIDING_WINDOW_SIZE; i < input.length + 1; i++) {
    slidingWindowArray.push(sumArray(input.slice(i - SLIDING_WINDOW_SIZE, i)));
}

// Use the same logic from before on the sliding window sum array.
let increases = 0;
for (let i = 1; i < slidingWindowArray.length; i++) {
    if (slidingWindowArray[i - 1] < slidingWindowArray[i]) {
        increases++;
    }
}

console.log(`increases: ${increases}`);
