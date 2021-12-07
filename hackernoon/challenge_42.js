// Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

const circle1 = [1, 1, 1];
const circle2 = [3, 4, 2];

function distanceBetween(p1, p2) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function circlesTouching(c1, c2) {
    const [x1, y1, r1] = c1;
    const [x2, y2, r2] = c2;

    const dist = distanceBetween([x1, y1], [x2, y2]);

    return dist <= r1 + r2;
}

console.log(circlesTouching(circle1, circle2));
