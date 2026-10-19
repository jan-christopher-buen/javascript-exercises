const fibonacci = function (n) {
    if (!Number.isInteger(n) || n < 1) {
        return "OOPS";
    }

    let previous = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
