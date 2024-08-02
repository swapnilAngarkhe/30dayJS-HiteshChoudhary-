const reverseFunction = function (x) {
    const reversedNumber = parseInt(
      Math.abs(x).toString().split("").reverse().join("")
    );
    if (reversedNumber > 2 ** 31) {
      return 0;
    }
    return reversedNumber * Math.sign(x);
  };
  
  console.log(reverseFunction(120));
  console.log(reverseFunction(-123));
  console.log(reverseFunction(123));
  console.log(reverseFunction(4250));