// Leetcode 238: Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let result = [];
  let len = nums.length;

  let prefix = 1;
  for (let i = 0; i < len; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let postfix = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }
  return result;
};

let nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums));