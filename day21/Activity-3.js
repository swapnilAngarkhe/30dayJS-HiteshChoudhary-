const isPalindrome = function (x) {
    if (x < 0) {
      return false;
    }
    const reversedNumber = parseInt(
      Math.abs(x).toString().split("").reverse().join("")
    );
    if (reversedNumber === x) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isPalindrome(121));
  console.log(isPalindrome(-121));
  console.log(isPalindrome(10));