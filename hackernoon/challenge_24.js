// Create a function that will merge two arrays and return the result as a new array

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays(a1, a2));
