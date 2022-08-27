// Recursive function to find the last index of target in an array
// --------------------------------------------------------------------- Solution 1 | Top Down
// function lastIndex(arr, target) {
//   let n = arr.length;
//   function getLastIndex(arr, idx, x) {
//     if (idx === -1) return;
//     if (arr[idx] === x) {
//       return idx;
//     }
//     return getLastIndex(arr.slice(0, idx), idx - 1, x)
//   }
//   return getLastIndex(arr, n - 1, target);
// }
// --------------------------------------------------------------------- Solution 2 | Bottom Up
function lastIndex(arr, target) {
  let n = arr.length;

  function getLastIndex(arr, n, x) {
    if (n === 0) return -1;
    let ans = getLastIndex(arr.slice(1), n - 1, x);

    if (ans !== -1) {
      return ans + 1;
    } else {
      if (arr[0] === x) {
        return 0;
      } else {
        return -1;
      }
    }
  }
  return getLastIndex(arr, n, target);
}

let arr = [2, 5, 3, 6, 8, 5, 2, 1];
console.log(lastIndex(arr, 5));