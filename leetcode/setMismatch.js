// Leetcode 645: Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let tempArr = [];
  let result = [];
  let len = nums.length;
  for (let i = 1; i <= len; i++) {
    tempArr.push(i);
  }
  for (let i = 0; i < len; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      result.push(nums[i]);
    }
  }
  for (let i = 0; i < len; i++) {
    if (!nums.includes(tempArr[i])) {
      result.push(tempArr[i]);
    }
  }
  return result;
};

let nums = [2,2]
console.log(findErrorNums(nums));