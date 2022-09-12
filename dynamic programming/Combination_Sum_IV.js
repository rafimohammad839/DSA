// ------------------------------------------------------------------------------ Optimal Solution | Bottom Up DP | Time - O(nums * target) | Space - O(target)
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