// Insertion sort developed BY MYSELF : No cheating
function sortByInsertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let k = i;
    let temp = nums[j];
    while (temp > nums[k] && j >= 0) {
      let c = nums[k];
      nums[k] = temp;
      nums[j] = c;
      j--;
      k--;
      temp = nums[j];
    }
  }
}

const nums = [5, 4, 3, 2, 1];

console.log("Unsorted version:", nums);
console.time();
sortByInsertionSort(nums);
console.timeEnd();
console.log("Sorted version:", nums);
