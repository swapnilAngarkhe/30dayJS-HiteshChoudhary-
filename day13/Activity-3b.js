import * as kuchbhi from './Activity-3a.js';

console.log('PI:', kuchbhi.PI);
console.log('E:', kuchbhi.E);

console.log('Subtract:', kuchbhi.subtract(5, 2));
console.log('Multiply:', kuchbhi.multiply(4, 3));
console.log('Divide:', kuchbhi.divide(10, 2));

try {
    console.log('Divide by zero:', kuchbhi.divide(10, 0));
} catch (e) {
    console.error(e.message);
}