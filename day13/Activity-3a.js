
const PI = 3.14159;
const E = 2.71828;

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        throw new Error("Division by zero is not allowed.");
    }
}

// Exporting the constants and functions
export { PI, E, subtract, multiply, divide };
