// Leetcode 11: Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
// ---------------------- Solution 1 | Time - O(N^2)
// var maxArea = function(height) {
//   let max = 0;
//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       if (height[i] < height[j]) {
//         let area = height[i] * Math.abs(i - j);
//         max = Math.max(area, max);
//       } else {
//         let area = height[j] * Math.abs(i - j);
//         max = Math.max(area, max);
//       }
//     }
//   }
//   return max;
// };

// ---------------------- Solution 2 | Time - O(N)
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      let current = height[left] * (right - left);
      maxArea = Math.max(current, maxArea);
      left++;
    } else {
      let current = height[right] * (right - left);
      maxArea = Math.max(current, maxArea);
      right--;
    }
  }
  return maxArea;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // Output : 49
console.log(maxArea(height));