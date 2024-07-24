//A-2
//task-3:
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = a / b;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }finally{
        console.log('try, catch and finally ran sucessfully')
    }
}
divideNumbers(10,0)