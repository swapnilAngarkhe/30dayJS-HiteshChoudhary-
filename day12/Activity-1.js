//A-1
//task-1:
function throwErrorFunction() {
    throw new Error("This is an intentional error.");
}

function main() {
    try {
        throwErrorFunction();
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

main();


//task-2:
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}
divideNumbers(10,0)