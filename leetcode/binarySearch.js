// Leetcode 704: Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let index = binarySearch(nums, start, end, target);
  return index;
};

function binarySearch(arr, start, end, target) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, start, mid - 1, target);
  if (arr[mid] < target) return binarySearch(arr, mid + 1, end, target);
}

let nums = [-1, 0, 3, 5, 9, 12], target = 9
console.log(search(nums, target));
