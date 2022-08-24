// Leetcode 189: Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  k = k % nums.length;
  
  let start = 0;
  let end = nums.length - 1;
  // Step #1: Reversing the entire array
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }

  // Step #2: Reversing upto but not including k elements
  start = 0;
  end = k - 1;
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }

  // Step #3: Reversing from k elements upto end
  start = k;
  end = nums.length - 1;
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
rotate(nums, k);
console.log(nums);