// Reverse an array

function reverse(array) {
    let revArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArray.push(array[i]);
    }
    return revArray;
}

let array = [1, 2, 3, 4, 5];

console.log(reverse(array));
