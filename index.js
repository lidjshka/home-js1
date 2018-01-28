const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));

document.write(quadraticEquation(a, b, c));

function quadraticEquation(a, b, c) {
    const d = discriminant(a, b, c);

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqr(d)) / (2 * a);
        return 'x1=' + x1 + ' x2=' + x2;
    }
    if (d === 0) {
        let x = -b / (2 * a);
        return 'x=' + x;
    }
    if (d < 0) {
        return 'Error!Discriminant<0';
    }
    function discriminant(a, b, c) {
        var result = b * b - 4 * a * c;
        return result;
    }
}
