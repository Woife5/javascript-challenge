// Print the distance between the first 100 prime numbers

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

let found = 1;
let lastPrime = 2;
for (let i = 3; found < 100; i += 2) {
    if (isPrime(i)) {
        console.log(`${i} - ${lastPrime} = ${i - lastPrime}`);
        lastPrime = i;
        found++;
    }
}
