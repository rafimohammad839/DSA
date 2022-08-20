// Leetcode 153: Find Minimum in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  if (nums[left] < nums[right]) return nums[left];
  
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (nums[mid] >= nums[left] && nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return nums[left];
};

let nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));