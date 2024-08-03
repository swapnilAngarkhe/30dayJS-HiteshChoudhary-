let lengthOfLongstr = function(str) {
    if (str.length < 2) {
        return str.length;
    }

    const map = {};
    let front = 0, back = 0, maxL = 0;

    for (; front < str.length; front += 1) {
        const exist = map[str[front]];

        if (exist !== undefined && exist >= back) {
            back = exist + 1;
        }

        map[str[front]] = front;
        maxL = Math.max(front - back + 1, maxL);
    }

    return maxL;
};

// Test cases
console.log(lengthOfLongstr("abcabcbb")); // OP 3
console.log(lengthOfLongstr("bbbbb"));    // OP: 1
console.log(lengthOfLongstr("pwwkew"));   // OP: 3
console.log(lengthOfLongstr(""));         // OP: 0
