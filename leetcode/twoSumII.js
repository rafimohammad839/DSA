// Leetcode 167: Two Sum II - Input Array Is Sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// [5, 25, 75], target = 100
var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // Pick first and last element and compare
  // We have the advantage of using two pointers because the input Array sorted
  while (left < right) {
    let currentSum = nums[left] + nums[right];
    if (currentSum > target) {
      right--;
    } else if (currentSum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
};

let numbers = [5, 25, 75],
  target = 100;
console.log(twoSum(numbers, target));
