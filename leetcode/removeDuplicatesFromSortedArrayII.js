// Leetcode 80: Remove Duplicates from Sorted Array II
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  [1, 1, 2, 2, 2, 3]
            l  i
*/
var removeDuplicates = function (nums) {
  let left = 2,
    len = nums.length,
    count = nums[0] === nums[1] ? 2 : 1;
  for (let i = 2; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[left] = nums[i];
      left++;
      count = 1;
    } else if (nums[i] === nums[i - 1]) {
      if (count <= 1) {
        nums[left] = nums[i];
        count++;
        left++;
      }
    }
  }
  for (let i = left; i < len; i++) {
    nums.pop();
  }
  return left;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));

/*
Test cases:
[1,1,1,2,2,3]
[0,0,1,1,1,1,2,3,3]
[1,1,1]
[1,1,1,1,2,2,3]
[1,2,2,2]
[1,1,1,2,2,3]
*/
