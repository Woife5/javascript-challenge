// Print the first 10 Fibonacci numbers without recursion
// Fib: 1 1 2 3 5 8 13 21 34 55

let prev = [1, 1];
console.log(1);
console.log(1);
for (let i = 2; i < 10; i++) {
    cur = prev[1] + prev[0];
    console.log(cur);
    prev[1] = prev[0];
    prev[0] = cur;
}
