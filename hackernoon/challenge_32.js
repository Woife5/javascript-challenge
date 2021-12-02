// Create a function that will capitalize the first letter of each word in a text

function capitalizeText(text) {
    const seperators = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?'];
    let wasSeperator = true;
    let wordCount = 0;
    let resultText = text;

    for (let i = 0; i < text.length; i++) {
        if (seperators.includes(text[i])) {
            wasSeperator = true;
        } else if (wasSeperator) {
            wasSeperator = false;
            resultText = resultText.substring(0, i) + resultText[i].toUpperCase() + resultText.substring(i + 1);
        }
    }
    return resultText;
}

console.log(capitalizeText('I like to learn JavaScript with codeguppy'));
console.log(capitalizeText('like to'));
console.log(capitalizeText('JavaScript'));
console.log(capitalizeText('javaScript'));
