// Leetcode 11: Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
/*
   0 1 2 3 4 5 6 7 8
  [1,8,6,2,5,4,8,3,7]
*/
var maxArea = function(height) {
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

let height =  [1,1] // Output : 49
console.log(maxArea(height));