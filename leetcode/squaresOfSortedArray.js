// Leetcode 977: Squares of a Sorted Array
/*
  nums = [-11,-8,-5,-4,-1,0,3,10]
  result = [1,3,4,16,25,64,100,121]
*/
/*
 * @param {number[]} nums
 * @return {number[]}
 */
// Less efficient | Time - O(N+NlogN)
// var sortedSquares = function (nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     result[i] = nums[i] * nums[i];
//   }
//   result.sort((a, b) => a - b);
//   return result;
// };

// More efficient | Time - O(N)
var sortedSquares = function (nums) {
  let result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left];
      left++;
    } else {
      result[i] = nums[right] * nums[right];
      right--;
    }
  }
  return result;
};

let nums = [-7, -3, 2, 3, 11]; // Output: [4, 9, 9, 49, 121]
console.log(sortedSquares(nums));
