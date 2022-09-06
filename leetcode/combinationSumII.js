// Leetcode 40: Combination Sum II
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(nums, sum) {
  nums.sort((a, b) => a - b);
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
   
    for (let i = l; i < nums.length; i++) {
      if (i > l && nums[i] === nums[i - 1]) {
        continue;
      }
      if (sum < nums[i]) {
        break;
      }
      temp.push(nums[i]);
      dfs(nums, i + 1, sum - nums[i], res, temp);
      temp.pop();
    }
  }
  dfs(nums, 0, sum, res, temp);
  return res;
};

let candidates = [10,1,2,7,6,1,5], target = 8
console.log(combinationSum2(candidates, target))