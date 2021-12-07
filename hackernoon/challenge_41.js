// Create a function to calculate the distance between two points defined by their x, y coordinates

function distanceBetween(p1, p2) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const p1 = [1, 1];
const p2 = [3, 4];

console.log(distanceBetween(p1, p2));
