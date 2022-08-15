// Leetcode 46: Permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
  let result = [];
  let ds = [];
  let freq = Array(nums.length).fill(true);
  for (let i = 0; i < nums.length; i++) {
    freq[i] = false;
    recursivePermute(result, ds, nums, freq);
  }
  return result;
};
function recursivePermute(result, ds, nums, freq) {
  if (ds.length === nums.length) {
    result.push([...ds]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!freq[i]) {
      ds.push(nums[i]);
      freq[i] = true;
      recursivePermute(result, ds, nums, freq);
      ds.pop();
      freq[i] = false;
    }
  }
}


let nums = [1, 2, 3];
console.log(permute(nums));