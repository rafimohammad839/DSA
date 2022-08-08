// Leetcode 215: Kth Largest Element in an Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// --------------------------------------- Solution 1 | Time - O(NLogN)
// function findKthLargest(arr, k) {
//   arr.sort((a, b) => a - b);
//   return arr[arr.length - k];
// }


// --------------------------------------- Solution 2 | Time - O(N + klogN)
//  function findKthLargest(arr, k) {
//   let kthLargest
//   let n = arr.length;
//   let lastLeaf = Math.floor(n / 2) - 1;
//   // First heapify the entire tree
//   for (let i = lastLeaf; i >= 0; i--) {
//     maxHeapify(arr, n - 1, i);
//   }

//   // Swap root and leaf node 
//   for (let i = n - 1; i >= (n - k); i--) {
//     kthLargest = arr[0];
//     arr[0] = arr[i];
//     arr[i] = kthLargest;
//     maxHeapify(arr, i - 1, 0);
//   }
//   return kthLargest;
// }

// function maxHeapify(arr, n, i) {
//   let left = 2 * i + 1;
//   let right = 2 * i + 2;
//   let largest = i;
//   if (left <= n && arr[left] > arr[i]) {
//     largest = left;
//   }

//   if (right <= n && arr[right] > arr[largest]) {
//     largest = right;
//   }

//   if (largest !== i) {
//     swap(arr, i, largest);
//     maxHeapify(arr, n, largest);
//   }
// }

// -------------------------------------- Solution 3 | Time - O(N) Average Case
function findKthLargest(arr, k) {
  let N = arr.length;
  let idx = N - k;

  function quickSelect(arr, l, r) {
    let p = l;
    let i;
    for (i = l; i < r; i++) {
      if (arr[i] <= arr[r]) {
        swap(arr, i, p);
        p += 1;
      }
    }
    swap(arr, p, r);
    if (idx < p) return quickSelect(arr, l, p - 1);
    else if (idx > p) return quickSelect(arr, p + 1, r);
    else return arr[p];
  }
  return quickSelect(arr, 0, N - 1);
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [10, 4, 8, 4, 3, 2, 9], k = 2;
console.log(findKthLargest(arr, k));