/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  
  nums.sort((a, b) => a - b);
  let result = [];
  let temp = [];
  let len = nums.length;

  function permute(nums, result, temp, idx) {

    if (idx === len - 1) {
      result.push(temp);
      return;
    }

    for (let i = idx; i < len; i++) {
      if (i != idx && nums[i] === nums[idx]) {
        continue;
      }
      swap(nums, i, idx);
      permute(nums, result, temp, i + 1);
    }

  }
  permute(nums, result, temp, 0);
  return result;
};


function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [1, 2, 3]
console.log(permuteUnique(nums));