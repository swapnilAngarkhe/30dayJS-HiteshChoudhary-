const twoSum = function (nums, target) {
    const numMap = {};
  
    for (let i = 0; i < nums.length; i++) {
      numMap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap.hasOwnProperty(complement) && numMap[complement] !== i) {
        return [i, numMap[complement]];
      }
    }
  };
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([3, 2, 4], 6));
  console.log(twoSum([3, 3], 6));