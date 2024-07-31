//TASKS 3 and 4 

const text = "The Quick Brown Fox Jumps Over The Lazy Dog. Do You See What I See?";

const pattern = /\b[A-Z]\w+/g;

console.log(text.match(pattern));

const text2 = "Today is the 15th day of the 3rd month, and it's 2023 already. Time flies!";

const pattern2 = /\d+/g;

console.log(text2.match(pattern2));