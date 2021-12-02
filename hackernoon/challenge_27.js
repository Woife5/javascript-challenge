// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

const arr = [1, 2, 3, 4, 5, 4, 5];

function toSet(array) {
    let set = new Set(array);
    return [...set];
}

console.log(toSet(arr));
