// Function to sort array elements using heap sort
function heapSort(arr) {
  let n = arr.length;
  let lastLeaf = Math.floor(n / 2) - 1;
  // First heapify the entire tree
  for (let i = lastLeaf; i >= 0; i--) {
    maxHeapify(arr, n - 1, i);
  }

  // Swap root and leaf node 
  for (let i = n - 1; i >= 0; i--) {
    swap(arr, i, 0);
    maxHeapify(arr, i - 1, 0);
  }
}

function maxHeapify(arr, n, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left <= n && arr[left] > arr[i]) {
    largest = left;
  }

  if (right <= n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    maxHeapify(arr, n, largest);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
heapSort(arr);
console.log(JSON.stringify(arr));