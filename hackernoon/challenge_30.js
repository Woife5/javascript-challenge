// Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function add(a, b) {
    let result = BigInt(a);
    result += BigInt(b);
    return result.toString();
}

console.log(add('2909034221912398942349', '1290923909029309499'));
