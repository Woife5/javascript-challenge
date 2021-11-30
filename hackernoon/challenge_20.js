// Rotate an array to the left 1 position

function rotateLeft(array) {
    array.push(array.shift());
}

let array = [1, 2, 3, 4, 5];

rotateLeft(array);
console.log(array);
