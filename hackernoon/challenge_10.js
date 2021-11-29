// Calculate the sum of numbers in an array of numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((prev, cur) => prev + cur, 0);

console.log(`Sum of the numbers: ${sum}`);
