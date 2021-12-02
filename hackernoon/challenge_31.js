// Create a function that will return the number of words in a text

const text = 'hello world this has six words.';

function numberOfWordsIn(str) {
    const seperators = [' ', '\t', '\n', '\r', ',', ';', '.', '!', '?'];
    let wasSeperator = true;
    let wordCount = 0;

    for (let char of str) {
        if (seperators.includes(char)) {
            wasSeperator = true;
        } else {
            if (wasSeperator) {
                wasSeperator = false;
                wordCount++;
            }
        }
    }

    return wordCount;
}

console.log('Number of words: ' + numberOfWordsIn(text));
console.log('Number of words: ' + numberOfWordsIn('JavaScript!!!   '));
console.log('Number of words: ' + numberOfWordsIn('     JavaScript'));
console.log('Number of words: ' + numberOfWordsIn('    JavaScript is cool      '));
console.log('Number of words: ' + numberOfWordsIn('I like to learn JavaScript with codeguppy'));
