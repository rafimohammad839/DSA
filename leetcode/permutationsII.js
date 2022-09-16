// Leetcode 47: Permutations II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function recursion(nums, i, j, res) {
  if (i === j - 1) {
    res.push([...nums]);
    return;
  }
  for (let k = i; k < j; k++) {
    if (i !== k && nums[i] === nums[k]) continue;
    swap(nums, i, k);
    recursion([...nums], i + 1, j, res);
  }
}

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  recursion(nums, 0, nums.length, res);
  return res;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [2, 2, 1, 1];
console.log(permuteUnique(nums));