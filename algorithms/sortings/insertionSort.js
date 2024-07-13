function sortByInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

const nums = [5, 4, 3, 2, 1];

console.log("Unsorted version:", nums);
console.time("Time taken:");
sortByInsertionSort(nums);
console.timeEnd("Time taken:");
console.log("Sorted version:", nums);
