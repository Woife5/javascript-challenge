// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 3, 4, 5];

function exclusiveOr(a, b) {
    let result = [];
    a.forEach(num => {
        if (!b.includes(num)) result.push(num);
    });

    b.forEach(num => {
        if (!a.includes(num)) result.push(num);
    });

    return result;
}

console.log(exclusiveOr(arr1, arr2));
