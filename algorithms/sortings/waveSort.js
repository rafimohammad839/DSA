// ---------------------------------------------- Wave Sort 
function waveSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i += 2) {
    if (arr[i] > arr[i - 1]) {
      swap(arr, i, i - 1);
    }
    if (arr[i] > arr[i + 1] && i <= n - 2) {kk
      swap(arr, i, i + 1);
    }
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [5, 7, 8, 1, 2, 3, 10];
waveSort(arr);
console.log("After wave-sorting: ", arr);
