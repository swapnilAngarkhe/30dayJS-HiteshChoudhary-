//TASKS 6 and 7

//countChar
function countChar(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}


const inputString = "chai aur code";
const result = countChar(inputString);
console.log(result);


//Longest substring:
function longStr(s) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }

        charMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(maxLength);
    return maxLength;
}

longStr("abcabcbb"); 
longStr("bbbbb");    
longStr("pwwkew");   