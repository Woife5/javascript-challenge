// Implement the bubble sort algorithm for an array of numbers

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

let arr = [4, 2, 6, 5, 1, 3];
bubbleSort(arr);

console.log(arr);
