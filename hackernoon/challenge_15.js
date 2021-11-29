// Create a function that will find the nth Fibonacci number using recursion

function nextFib(prev, cur, num) {
    if (num === 1) return prev + cur;

    return nextFib(cur, prev + cur, num - 1);
}

function getFib(num) {
    return nextFib(1, 1, num - 2);
}

console.log(`Fibonacci number 10: ${getFib(10)}`);
