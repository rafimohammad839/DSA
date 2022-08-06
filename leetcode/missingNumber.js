// Leetcode 268: Missing Number
/**
 * @param {number[]} nums
 * @return {number}
 */

// --------------------------------------- Solution 1 | Time - O(NLogN)
// var missingNumber = function (nums) {
//   let n = nums.length;
//   let missing = 0;
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   for (let i = 0; i < n; i++) {
//     if (nums[i] === missing) {
//       missing += 1;
//     }
//   }
//   return missing;
// };

// -------------------------------- Solution 2 | Optimal Solution | Time - O(1)
var missingNumber = function (nums) {
  let n = nums.length;
  let sum = Math.floor(n*(n + 1) / 2);
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }
  return sum;
};

let nums = [6, 2, 0, 1, 3, 4];
console.log("Missing number is ", missingNumber(nums));
