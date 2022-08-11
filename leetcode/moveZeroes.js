// Leetcode 283: Move Zeroes
// -------------------------------------- Solution 1 | Time - O(N^2)
// var moveZeroes = function (nums) {
//   if (nums.every((val) => val === 0)) {
//     return;
//   }
//   let i = 0;
//   let count = 0;
//   while (i < nums.length) {
//     if (nums[i] === 0) {
//       nums.splice(i, 1);
//       i = 0;
//       count++;
//     } else {
//       i++;
//     }
//   }
//   for (let i = 0; i < count; i++) {
//     nums.push(0);
//   }
// };

//-------------------------------------- Solution 1 | Time - O(N^2)
var moveZeroes = function (nums) {
  let left = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      swap(nums, i, left);
      left++;
    }
  }
  return nums;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [0, 1, 0, 3, 12];
// output = [1, 3, 12, 0, 0]
let t0 = performance.now();
moveZeroes(nums);
let t1 = performance.now();
console.log(nums);
console.log(`Time taken ${t1 - t0} ms`);
