// Create a function to convert a CSV text to a “bi-dimensional” array

const csvString = '1,2,3,4\n5,6,7,8\n9,10,11,12';

function csvToArray(text) {
    const rows = text.split('\n');
    let result = [];

    rows.forEach(row => {
        const elements = row.split(',');
        let tempResult = [];
        elements.forEach(element => {
            tempResult.push(element);
        });
        result.push(tempResult);
    });

    return result;
}

console.log(csvToArray(csvString));
