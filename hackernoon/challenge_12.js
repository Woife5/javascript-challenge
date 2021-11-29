// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function getOnlyPositive(arrayOfNumbers) {
    return arrayOfNumbers.filter(e => e >= 0);
}

const numbers = [-1, 1, -6, 2, -5, -2, 3];
console.log(`Only positives: ${getOnlyPositive(numbers)}`);
