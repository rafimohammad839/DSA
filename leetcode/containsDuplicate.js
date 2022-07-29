// Leetcode 217: Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// ---------------------- Less Efficient Solution
// var containsDuplicate = function (nums) {
//   let status = false;
//   nums.forEach((val, idx) => {
//     if (nums.indexOf(val) !== idx) {
//       status = true;
//     }
//   })    
//   return status;
// };

// ----------------------- More Efficient Solution
var containsDuplicate = function (nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
};


let nums = [1, 2, 3, 2]
console.log(containsDuplicate(nums))