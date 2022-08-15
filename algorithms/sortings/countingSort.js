// ------------------------------------------------------ Counting Sort | Time - O(N+k) | Auxiliary Space - O(N+k) ; where k is the range of array elements
function countingSort(arr) {
  let n = arr.length;
  let max = arr[0];
  // Finding the maximum element of arr
  for (let i = 0; i < n; i++) {
    max = Math.max(arr[i], max);
  }

  // Creating count array of size max + 1
  let count = new Array(max+1).fill(0);
  for (let i = 0; i < n; i++) {
    count[arr[i]] += 1;
  }
  // Modifying the count array
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i-1];
  }
  
  let sortedArr = new Array(n).fill(0);
  // Finding the position of element in the sortedArr
  for (let i = n -1 ; i >= 0; i--) {
    sortedArr[--count[arr[i]]] = arr[i];
  }

  // Finally copying elements from sortedArr to arr
  for (let i = 0; i < n; i++) {
    arr[i] = sortedArr[i];
  }
}

let arr = [6, 3, 2, 2, 1, 1, 1, 4, 5];
countingSort(arr);
console.log("After sorting the array: ", arr);
