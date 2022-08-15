// Selection Sort - Quadratic Sorting
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let select = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[select]) {
        select = j;
      }
    }
    swap(arr, select, i);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [4, 2, 8, 12, 1, 9];
selectionSort(arr);
console.log(arr);
