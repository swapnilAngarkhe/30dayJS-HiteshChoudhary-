function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (pairs[char]) {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Cases
console.log(isValid("()")); // T
console.log(isValid("()[]{}")); // T
console.log(isValid("(]")); // F
console.log(isValid("([)]")); // F
console.log(isValid("{[]}")); // T