// Calculate the average of the numbers in an array of numbers

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const avg = numbers.reduce((prev, cur) => prev + cur, 0) / numbers.length;

console.log(`Sum of the numbers: ${avg}`);
