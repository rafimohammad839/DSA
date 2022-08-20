// Leetcode 81: Search in Rotated Sorted Array II
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return true;
    // In case of duplicate elements on mid, left and right pointers
    if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
      left++;
      right--;
    } else if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};

let nums = [4, 5, 6, 7, 8, 9, 1, 1, 1, 2, 3, 3, 3],
  target = 3;
console.log(search(nums, target));
