//TASKS 1 and 2

const text = "Python is versatile. If you don't like Python, what other programming language could you possibly prefer over Python?";
const pattern = /python/gi;
console.log(text.match(pattern));

const text2 = "Hello, my name is Alice 34 and I have 56 apples in my basket. The number 78 is quite interesting.";
const pattern2 = /\d/g;
console.log(text2.match(pattern2));