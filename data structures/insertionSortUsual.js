function insertionSort(nums, len) {
  for (let i = 1; i < len; i++) {
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
}

const nums = [10, 5, 15, 8, 20, 24];

console.log("Unsorted version:", nums);
console.time();
insertionSort(nums, nums.length);
console.timeEnd();
console.log("Sorted version:", nums);