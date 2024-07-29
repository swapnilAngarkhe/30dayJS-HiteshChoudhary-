//task 3 and 4:

class StackMe {
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
    }
    pop() { 
        if (this.isEmpty()) {
            return `Stack is empty, can't pop`;
        } else {
            return this.stack.pop();
        }
    }

    peek() {
        if (this.isEmpty()) {
            return `Stack is empty, there is nothing to see.`;
        } else {
            return this.stack[this.stack.length - 1];
        }
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    size() {
        return this.stack.length;
    }
}

const stack = new StackMe();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); 

console.log("Removed element:", stack.pop()); 
console.log("Top element after pop:", stack.peek()); 

console.log("Is stack empty?", stack.isEmpty()); 

console.log("Stack size:", stack.size());




let letters=[];
let word='aspas'
let revWord='';

for(let i =0; i<word.length; i++){
    letters.push(word[i]);
}

for(let i =0; i<word.length; i++){
    revWord+=letters.pop();
}

console.log(revWord);