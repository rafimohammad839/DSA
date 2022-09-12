// Leetcode 198: House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
// ----------------------------------- Solution 1 | Memoization
// var rob = function (nums) {
//   let dp = {};
//   let n = nums.length;
//   function dfs(nums, idx) {
//     if (idx >= n) {
//       return 0;
//     }
//     if (idx === n - 1) {
//       return dp[idx] = nums[idx];
//     }
//     if (idx in dp) {
//       return dp[idx];
//     }
//     return dp[idx] = Math.max(nums[idx] + dfs(nums, idx + 2), dfs(nums, idx + 1));
//   }
//   return dfs(nums, 0);
// };


// ----------------------------------- Solution 2 | 1D Array DP | Space - O(N) | Time - O(N)
// var rob = function (nums) {
//   let dp = Array(nums.length + 1).fill(0);
//   dp[0] = 0;
//   dp[1] = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
//   }
//   return dp[nums.length];
// };

// ----------------------------------- Solution 3 | Constant Space DP | Space - O(1) | Time - O(N)
var rob = function (nums) {
  let first = 0, second = 0;
  for (const i in nums) {
    let temp = Math.max(second, first + nums[i]);
    first = second;
    second = temp;
  }
  return second;
};


let nums = [2, 7, 9, 3, 1];
console.log(rob(nums));
