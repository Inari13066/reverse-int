module.exports = function reverse(n) {
    let string = Math.abs(n).toString();

    let number = string.slice(-1);
    for (let i = 1; i < string.length; i++) {
        number += string.slice(-(i + 1), -i);
    }

    return number;
};
