const sumAll = function (start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    const smaller = Math.min(start, end);
    const larger = Math.max(start, end);

    let sum = 0;
    for (let i = smaller; i <= larger; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
