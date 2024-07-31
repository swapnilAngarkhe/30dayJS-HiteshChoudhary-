//Tasks 7 and 8

const text = `
Python is great Python. If you don't like 
Python what else can you like if not Python
`;

const pattern = /^Python/gm;

console.log(text.match(pattern));

const text2 = `
Python is great Python. If you don't like something
Python what else something can you like if not Python 
`;

const pattern2 = /something$/gm;

console.log(text2.match(pattern2));