/*
  Given an array nums of integers and a sum target, find all unique combinations in the array where the sum is equal to target. The same number may be chosen from the array any number of times to make target.
  Geeksforgeeks practice problem link: https://bit.ly/3KSLKFy
*/
class Solution {
  res = [];
  temp = [];
  combinationSum(nums, target) {
    nums.sort((a, b) => a - b);
    this.dfs(nums, 0, target, this.res, this.temp);
    return this.res;
  }
  dfs(nums, l, sum, res, temp) {
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
    for (let i = l; i < nums.length; i++) {
      if (i > l && nums[i] === nums[i - 1]) continue;
      temp.push(nums[i]);
      this.dfs(nums, i, sum - nums[i], res, temp);
      temp.pop();
    }
  }
}

let sol = new Solution();
let nums = [6,5,7,1,8,2,9,9,7,7,9];
let target = 6;
console.log(sol.combinationSum(nums, target));