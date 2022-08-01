// Leetcode 645: Set Mismatch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let tempArr = [], result = [], duplicate, missing, len = nums.length;
  for (let i = 1; i <= len; i++) {
    tempArr.push(i);
  }
  for (let i = 0; i < len; i++) {
    if (nums.indexOf(nums[i]) !== i) {
      duplicate = nums[i];
    }
    if (!nums.includes(tempArr[i])) {
      missing = tempArr[i];
    }
  }
  result.push(duplicate, missing);
  return result;
};

let nums = [2, 2]
console.log(findErrorNums(nums));