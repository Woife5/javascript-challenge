// Find the maximum number in an array of numbers

const numbers = [2, 3, 8, 4, 6, 10];

const max = numbers.reduce((prev, cur) => Math.max(prev, cur));

console.log(`Max number: ${max}`);
