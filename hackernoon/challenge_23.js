// Reverse a string

const str = 'Hello World';
let revStr = '';

for (let i = str.length - 1; i >= 0; i--) {
    revStr += str.charAt(i);
}

console.log(revStr);
