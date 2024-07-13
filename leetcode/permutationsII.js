// Leetcode 47: Permutations II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  let l = 0;
  let r = nums.length - 1;
  let result = [];
  function permute(nums, l, r) {
    if (l === r) {
      let copy = JSON.parse(JSON.stringify(nums));
      result.push(copy);
      return;
    }
    for (let i = l; i <= r; i++) {
      if (i !== l && nums[i] === nums[l]) continue;
      swap(nums, l, i);
      permute([...nums], l + 1, r);
    }
  }
  permute(nums, l, r);
  return result;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [2, 2, 1, 1];
console.log(permuteUnique(nums));