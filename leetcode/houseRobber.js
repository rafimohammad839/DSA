// Leetcode 198: House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
// ----------------------------------- Solution 1 | Space - O(N) | Time - O(N)
// var rob = function (nums) {
//   let dp = Array(nums.length + 1).fill(0);
//   dp[0] = 0;
//   dp[1] = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
//   }
//   return dp[nums.length];
// };

// ----------------------------------- Solution 2 | Space - O(1) | Time - O(N)
var rob = function (nums) {
  let first = 0, second = 0;
  for (const i in nums) {
    let temp = Math.max(second, first + nums[i]);
    first = second;
    second = temp;
  }
  return second;
};
let nums = [2,7,9,3,1];
console.log(rob(nums));
