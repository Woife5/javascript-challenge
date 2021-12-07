// Implement the Caesar cypher

const str = 'Hello World!';

function caesarCypher(s, num) {
    let res = [];

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);

        if (code <= 90 && code >= 65) {
            code += num;
            if (code > 90) {
                code -= 26;
            }
        } else if (code >= 97 && code <= 122) {
            code += num;
            if (code > 122) {
                code -= 26;
            }
        }
        res.push(code);
    }

    return String.fromCharCode(...res);
}

console.log(caesarCypher(str, 3));
console.log(caesarCypher(caesarCypher(str, 3), -3));
