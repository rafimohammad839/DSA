// Leetcode 31: Next Permutation
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
  let first;
  let just_greater;
  let i = nums.length - 2;
  while (i >= 0) {
    if (nums[i] < nums[i + 1]) {
      first = i;
      break;
    }
    i--;
  }
  if (i < 0) {
    nums.reverse();
  } else {
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i] > nums[first]) {
        just_greater = i;
        break;
      }
    }
    swap(nums, first, just_greater);
    reverseBetween(nums, first + 1, nums.length);
  }
};

function reverse(arr) {
  const { length: l } = arr;
  for (let i = 0; i < Math.floor(l / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[l - i - 1];
    arr[l - i - 1] = temp;
  }
  return arr;
}

function reverseBetween(arr, start, end) {
  let { length: l } = arr;
  let numCount = Math.min(end - start, l - start);
  arr.splice(start, 0, ...reverse(arr.splice(start, numCount)));
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let nums = [1, 3, 2]; // -> [2, 1, 3]
nextPermutation(nums);
console.log("Next permutation in lexicographical order is ", nums);
