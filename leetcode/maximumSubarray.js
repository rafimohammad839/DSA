// Leetcode 53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
// ---------------- Optimal Solution - O(N) | Kadane's Algorithm
 var maxSubArray = function(nums) {
  let max = Number.MIN_SAFE_INTEGER; // Or -Infinity or nums[0]
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (curr < 0) curr = 0;
    curr += nums[i];
    max = Math.max(max, curr);
  }
 return max;
}; 

let nums = [-1];
console.log(maxSubArray(nums));