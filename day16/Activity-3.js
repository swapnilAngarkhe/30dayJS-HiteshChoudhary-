//TASK-5 TASK-6

function reverseMe(str){
    if(str==""){
        return ""
    }else{
        return reverseMe(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseMe('docomo'));
console.log(reverseMe('niqqa'));
console.log(reverseMe('momo'));


function palYeh(str){
    if(str==""){
        return ""
    }else{
        const S = reverseMe(str.substr(1)) + str.charAt(0);
        if (S==str){
            return `string ${str} is a palindrome`;
        }else{
            return `string ${str} is not a palindrome`;
        }
    }
    
}

console.log(palYeh('docomo'));
console.log(palYeh('level'));
console.log(palYeh('niqqa'));
console.log(palYeh('wow'));