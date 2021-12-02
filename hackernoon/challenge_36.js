// Create a function that converts a string to an array of characters

function stringToArray(text) {
    let result = [];

    for (const char of text) {
        result.push(char);
    }

    return result;
}

console.log(stringToArray('Hello World!'));
