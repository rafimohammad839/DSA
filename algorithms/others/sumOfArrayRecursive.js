// Recursive way to find sum Of array elements
function sumOfArray(arr) {
  let n = arr.length;
  function recursiveSum(arr, len) {
    if (len === 0) {
      return 0;
    }
    return arr[0] + recursiveSum(arr.slice(1), len - 1);
  }
  return recursiveSum(arr, n);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumOfArray(arr));