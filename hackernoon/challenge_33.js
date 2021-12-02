// Calculate the sum of numbers received in a comma delimited string

function sumCSV(string) {
    const numbers = string.split(',');
    return numbers.reduce((sum, num) => sum + parseFloat(num), 0);
}

console.log(sumCSV('1,2,3,4,5'));
