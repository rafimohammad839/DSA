// Leetcode 198: House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = Array(nums.length + 1).fill(0);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }
  return dp[nums.length];
};

let nums = [1, 2, 2, 3, 100, 5, 8, 1];
console.log(rob(nums));
