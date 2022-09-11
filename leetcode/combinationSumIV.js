// Leetcode 377: Combination Sum IV
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = {};
  function dfs(nums, target) {
    if (target === 0) {
      return 1;
    }

    if (target in dp) {
      return dp[target];
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= target) {
        count += dfs(nums, target - nums[i]);
      }
    }
    return  dp[target] = count;
  }  
  return dfs(nums, target);
};

let nums = [1, 2, 3], target = 4;
console.log(combinationSum4(nums, target));