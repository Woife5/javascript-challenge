// Create a function that will convert a string in an array containing the ASCII codes of each character

function stringToASCIIArray(text) {
    let result = [];

    for (let i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i));
    }

    return result;
}

console.log(stringToASCIIArray('Hello World!'));
