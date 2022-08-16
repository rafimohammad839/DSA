// Leetcode 33: Search in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [4, 5, 6, 7, 0, 1, 2]
// 4 + 0 = 4
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // Finding the smallest element
  while (left < right) {
    let midpoint = left + Math.floor((right - left) / 2);
    if (nums[midpoint] > nums[right]) {
      left = midpoint + 1;
    } else {
      right = midpoint;
    }
  }

  console.log('Midpoint is ', left);
  // [4, 5, 6, 7, 0, 1, 2]
  // Setting the starting position on the smallest element index
  let start = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[start] && target <= nums[right]) {
    left = start;
  } else {
    right = start;
  }

  // Regular Binary Search
  while (left <= right) {
    let midpoint = left + Math.floor((right - left) / 2);
    console.log('Midpoint is ', midpoint);
    if (nums[midpoint] === target) {
      return midpoint;
    } else if (nums[midpoint] < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }
  return -1;
};

let arr = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(search(arr, target));
