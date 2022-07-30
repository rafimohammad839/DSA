// Quick Sort Algorithm | Avg Case Time - O(N) 
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i]);
    } 
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [7, 3, 2, 5, 10, 1, 4, 20, 25, 40];
console.time();
console.log(quickSort(arr));
console.timeEnd();