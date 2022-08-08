// Leetcode 215: Kth Largest Element in an Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 function findKthLargest(arr, k) {
  let kthLargest
  let n = arr.length;
  let lastLeaf = Math.floor(n / 2) - 1;
  // First heapify the entire tree
  for (let i = lastLeaf; i >= 0; i--) {
    maxHeapify(arr, n - 1, i);
  }

  // Swap root and leaf node 
  for (let i = n - 1; i >= (n - k); i--) {
    kthLargest = arr[0];
    arr[0] = arr[i];
    arr[i] = kthLargest;
    maxHeapify(arr, i - 1, 0);
  }
  return kthLargest;
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

let arr = [10, 4, 8, 4, 3, 2, 9], k = 2;
console.log(findKthLargest(arr, k));