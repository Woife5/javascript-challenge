// Rotate an array to the right 1 position

function rotateRight(array) {
    array.unshift(array.pop());
}

let array = [1, 2, 3, 4, 5];

rotateRight(array);
console.log(array);
