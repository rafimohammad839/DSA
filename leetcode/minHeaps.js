// Function to construct max heap from an array
function constructHeap(arr) {
    let last_non_leaf = Math.floor(arr.length / 2) - 1;
    // element is arr[last_non_leaf]
    for (let i = last_non_leaf; i >= 0; i--) {
      minHeapify(arr, i);
    }
  }
  
  // Recursive heapify function
  function minHeapify(arr, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let smallest;
    if (left < arr.length && arr[left] < arr[i]) {
      smallest = left;
    } else {
      smallest = i;
    }
    if (right < arr.length && arr[right] < arr[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      swap(arr, i, smallest);
      minHeapify(arr, smallest);
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
        