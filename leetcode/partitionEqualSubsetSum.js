// Leetcode 416: Partition Equal Subset Sum
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 !== 0) return false;
  let target = Math.floor(sum / 2);
  let dp = new Array(nums.length + 1)
    .fill(-1)
    .map(() => new Array(target + 1).fill(-1));
  return subsetSum(nums, target, 0, dp);
};

// --------------------------------------------------------------- Solution 1 | Top Down DP
// function subsetSum(nums, sum, i, dp) {
//   if (sum === 0) {
//     return true;
//   }
//   if (sum < 0) {
//     return false;
//   }
//   if (i === nums.length) {
//     return false;
//   }
//   if (dp[i][sum] !== -1) return dp[i][sum];

//   return (dp[i][sum] =
//     subsetSum(nums, sum - nums[i], i + 1, dp) ||
//     subsetSum(nums, sum, i + 1, dp));
// }

// --------------------------------------------------------------- Solution 2 | Bottom Up DP
function subsetSum(nums, sum, i, dp) {
  for (let i = 0; i < nums.length + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = false;
      } else if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - nums[i - 1]] || dp[i - 1][j];
      }
    }
  }
  return dp[nums.length][sum];
}

let nums = [1,5,11,5]
console.log(canPartition(nums));
