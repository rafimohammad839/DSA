// Recursive function to find the first index of target in an array
// --------------------------------------------------------------------- Solution 1 | Top Down
// function firstIndex(arr, target) {
//   let len = arr.length;
//   function recursiveSearch(arr, idx) {
//     if (arr[0] === target) {
//       return idx;
//     }
//     if (idx === len) {
//       return -1;
//     }
//     return recursiveSearch(arr.slice(1), idx + 1);
//   }
//   return recursiveSearch(arr, 0);
// }

// --------------------------------------------------------------------- Solution 1 | Bottom Up
function firstIndex(arr, target) {
  let n = arr.length;
  function getFirstIndex(arr, n, x) {
    if (n === 0) return -1;
    let ans = getFirstIndex(arr.slice(0, n - 1), n - 1, x);
    if (ans !== -1) {
      return ans;
    } 
    if (arr[n - 1] === x) {
      return n - 1;
    } else {
      return -1;
    }
  }
  return getFirstIndex(arr, n, target);
}

let arr = [5, 2, 3, 8, 4, 3, 9, 2, 8];
let target = 4;
console.log(firstIndex(arr, target))