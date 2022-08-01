// Leetcode 75: Sort Colors
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Less efficient | Two Pass | O(N + k)
//  var sortColors = function (nums) {
//   let n = nums.length;
//   let red = 0;
//   let white = 0;
//   let blue = 0;
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === 0) {
//           red++;
//       } else if (nums[i] === 1) {
//           white++;
//       } else {
//           blue++;
//       }
//   }
//   for (let i = 0; i < red; i++) {
//       nums[i] = 0;
//   }
//   for (let i = red; i < red + white; i++) {
//       nums[i] = 1;
//   }
//   for (let i = red + white; i < n; i++) {
//       nums[i] = 2;
//   }
// };

// One Pass | Best Solution | Time - O(N)
var sortColors = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let i = 0;
  while (i <= end) {
    if (nums[i] === 0) {
      nums[i] = nums[start]
      nums[start] = 0;
      i++;
      start++;
    } else if (nums[i] === 2) {
      nums[i] = nums[end];
      nums[end] = 2;
      end--;
    } else {
      i++;
    }
  }
};

let nums = [2,0,2,1,1,0]
sortColors(nums);
console.log(nums);
