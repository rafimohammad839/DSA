// Function to construct max heap from an array
function constructHeap(arr) {
  let last_non_leaf = Math.floor(arr.length / 2) - 1;
  // element is arr[last_non_leaf]
  for (let i = last_non_leaf; i >= 0; i--) {
    maxHeapify(arr, i);
  }
}

// Recursive heapify function
function maxHeapify(arr, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest;
  if (left < arr.length && arr[left] > arr[i]) {
    largest = left;
  } else {
    largest = i;
  }
  if (right < arr.length && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    maxHeapify(arr, largest);
  }
}
// Generic function to swap array elements
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Convert a normal array into heap array
let arr = [3, 5, 10, 12, 6, 9, 8, 20];
constructHeap(arr);
console.log("Constructed Max Heap is", JSON.stringify(arr));
      