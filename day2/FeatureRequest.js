//Arethmatic 
const num1 = 1;
const num2 = 50;

console.log(`addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Product: ${num1*num2}`);
console.log(`division: ${num1 / num2}`);
console.log(`Remainder: ${num1 % num2}`);


//Comparison 
const a = 10;
const b = 5;
const l=10;
const t="10"

console.log(`a == b: ${a == b}`);
console.log(`a != b: ${a != b}`);
console.log(`a > b: ${a > b}`);
console.log(`a < b: ${a < b}`);
console.log(`a >= b: ${a >= b}`);
console.log(`a <= b: ${a <= b}`);
console.log(`a === l: ${a === l}`);
console.log(`a === t: ${a === t}`);


//logical
console.log(`a > b && b > 0: ${a > b && b > 0}`);
console.log(`a < b || b > 0: ${a < b || b > 0}`);
console.log(`!(a < b): ${!(a < b)}`);


//?:
const number = -69;

const result = (number >= 0) ? "Positive" : "Negative";
console.log(`${result}`);

