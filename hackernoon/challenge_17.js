// Calculate the sum of digits of a positive integer number

const number = 12345;
const numberString = number.toString();

let sum = 0;
for (let digit of numberString) {
    sum += Number(digit);
}

console.log(`Sum of digits: ${sum}`);
