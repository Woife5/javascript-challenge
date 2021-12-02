// Create a function that will return an array with words inside a text

function toArray(text) {
    const seperators = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?'];
    let wasSeperator = true;
    let wordStart = 0;
    let words = [];

    for (let i = 0; i < text.length; i++) {
        if (seperators.includes(text[i])) {
            wasSeperator = true;
            if (i !== wordStart) {
                words.push(text.substring(wordStart, i));
            }
        } else if (wasSeperator) {
            wasSeperator = false;
            wordStart = i;
        }
    }
    if (!wasSeperator) {
        words.push(text.substring(wordStart, text.length));
    }
    return words;
}

console.log(toArray('I like to learn JavaScript with codeguppy'));
console.log(toArray('like to'));
console.log(toArray('JavaScript'));
