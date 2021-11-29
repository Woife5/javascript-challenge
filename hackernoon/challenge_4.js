// Print all the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication table for ${i}`);
    for (let j = 0; j <= 10 * i; j += i) {
        console.log(j);
    }
}
