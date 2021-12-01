// Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 3, 4, 5];

function iDontEvenKnow(a, b) {
    let result = [];

    a.forEach(num => {
        if (!b.includes(num)) result.push(num);
    });

    return result;
}

console.log(iDontEvenKnow(arr1, arr2));
