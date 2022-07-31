// Leetcode 41: First Missing Positive
/**
 * @param {number[]} nums
 * @return {number}
 */
// --------------------------------- Solution 1 | Less Efficient | Time - O(NlogN) | Space O(1)
// var firstMissingPositive = function (nums) {
//   nums.sort((a, b) => a - b);
//   let missing = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === missing) {
//       missing += 1;
//     }
//   }
//   return missing;
// };

// --------------------------------- Solution 2 | Most Efficient | Time - O(N) | Space O(1)
var firstMissingPositive = function (nums) {
  let len = nums.length;
  // Getting rid of negative numbers as they don't count
  for (let i = 0; i < len; i++) {
    if (nums[i] < 0) nums[i] = 0;
  }

  // Marking value at specific index to show that a pariticular number exists
  for (let i = 0; i < len; i++) {
    let val = Math.abs(nums[i]);
    if (val <= len && val >= 1) {
      let markUp = val - 1;
      if (nums[markUp] > 0) {
        nums[markUp] = -1 * nums[markUp];
      } else if (nums[markUp] === 0) {
        nums[markUp] = -1 * (len + 1);
      }
    }
  }

  // Finding if the number from solution set exists in the nums
  for (let i = 1; i <= len; i++) {
    if (nums[i - 1] >= 0) {
      return i;
    }
  }
  return len + 1;
};

let nums = [7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums));
