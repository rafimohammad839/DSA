//Leetcode 78: Subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let temp = [];
  let result = [];

  function helperFun(nums, i, temp) {
    if (i === nums.length) {
      result.push(JSON.parse(JSON.stringify(temp)));
      return;
    }
    temp.push(nums[i]);
    helperFun(nums, i + 1, temp);
    temp.pop(nums[i]);
    helperFun(nums, i + 1, temp);
  }
  helperFun(nums, 0, temp);
  return result;
};

let nums = [1, 2, 3];
console.log(subsets(nums));