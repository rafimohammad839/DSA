// Leetcode: 26: Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let uniques = new Set();
  let i = 0;
  while (i < nums.length) {
    if (uniques.has(nums[i])) {
      nums.splice(i, 1);
    } else {
      uniques.add(nums[i]);
      i++;
    }
  }
  return nums.length;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));