// Leetcode: 26: Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
// -------------------------------------- Solution 1 | Time - O(N) | Space - O(N)
var removeDuplicates = function (nums) {
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

// -------------------------------------- Solution 2 | Time - O(N) | Space - O(1)
var removeDuplicates = function (nums) {
  let left = 1,
    index = 1,
    len = nums.length;
  // Keeping left pointer still if we encounter the same value as immediate previous value
  while (index < len) {
    if (nums[index] !== nums[index - 1]) {
      nums[left] = nums[index];
      left++;
    }
    index++;
  }
  // Starting from left pointer, filling undefined
  for (let i = left; i < len; i++) {
    nums[i] = undefined;
  }
  return nums;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
