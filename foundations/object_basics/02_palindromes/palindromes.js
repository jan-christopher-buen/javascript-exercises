const palindromes = function (string) {
    const allowed = "abcdefghijklmnopqrstuvwxyz0123456789";
    const lower = string.toLowerCase();

    let cleaned = "";
    for (let i = 0; i < lower.length; i++) {
        if (allowed.includes(lower[i])) {
            cleaned = cleaned + lower[i];
        }
    }

    let reversed = "";
    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed = reversed + cleaned[i];
    }

    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;