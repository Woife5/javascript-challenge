// Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

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

function getPrimes(nPrimes, startAt) {
    let result = [];
    for (let i = startAt; result.length < nPrimes; i++) {
        if (isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(getPrimes(10, 31));
