// Leetcode 39: Combination Sum
/**
 * @param {number[]} nums
 * @param {number} sum
 * @return {number[][]}
 */
// ------------------------------------------------------------------ Solution 1 | Using Recursion inside for-loop
// var combinationSum = function(nums, sum) {
//   let res = [];
//   let temp = [];
//   function dfs(nums, l, sum, res, temp) {
//     if (sum === 0) {
//       let copy = JSON.parse(JSON.stringify(temp));
//       res.push(copy);
//       return;
//     }
//     if (sum < 0) {
//       return;
//     }
//     for (let i = l; i < nums.length; i++) {
//       temp.push(nums[i]);
//       sum -= nums[i];
//       dfs(nums, i, sum, res, temp);
//       temp.pop();
//       sum += nums[i];
//     }
    
//   }
//   dfs(nums, 0, sum, res, temp);
//   return res;
// };

// ------------------------------------------------------------------ Solution 2 | Using Recursion without for-loop
var combinationSum = function(nums, sum) {
  let res = [];
  let temp = [];
  function dfs(nums, l, sum, res, temp) {
    if (sum === 0) {
      let copy = JSON.parse(JSON.stringify(temp));
      res.push(copy);
      return;
    }
    if (l === nums.length) {
      return;
    }
    if (sum < 0) {
      return;
    }
    
    dfs(nums, l + 1, sum, res, temp);
    temp.push(nums[l]);
    dfs(nums, l, sum - nums[l], res, temp);
    temp.pop();
  }
  dfs(nums, 0, sum, res, temp);
  return res;
};
let nums = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(nums, target));