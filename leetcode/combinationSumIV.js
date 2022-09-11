// Leetcode 377: Combination Sum IV
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// ------------------------------------------------------------------------------ Solution 1 | Top Down DP
// var combinationSum4 = function (nums, target) {
//   let dp = {};
//   function dfs(nums, target) {
//     if (target === 0) {
//       return 1;
//     }

//     if (target in dp) {
//       return dp[target];
//     }

//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] <= target) {
//         count += dfs(nums, target - nums[i]);
//       }
//     }
//     return  dp[target] = count;
//   }  
//   return dfs(nums, target);
// };

// ------------------------------------------------------------------------------ Solution 2 | Bottom Up DP
var combinationSum4 = function(nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i < target + 1; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }
  return dp[target];
};


let nums = [1, 2, 3], target = 4;
console.log(combinationSum4(nums, target));