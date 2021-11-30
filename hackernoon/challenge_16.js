// Create a function that will return a Boolean specifying if a number is prime

function isPrime(num) {
    if (num === 1) return true;
    if (num === 2) return true;

    let n = Math.sqrt(num);
    for (let i = 2; i <= n; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(`Is 1 a prime?: ${isPrime(1)}`);
console.log(`Is 4 a prime?: ${isPrime(4)}`);
console.log(`Is 6 a prime?: ${isPrime(6)}`);
console.log(`Is 7 a prime?: ${isPrime(7)}`);
console.log(`Is 11 a prime?: ${isPrime(11)}`);
