// Recursive function to find the first index of target in an array
function firstIndex(arr, target) {
  let len = arr.length;
  function recursiveSearch(arr, idx) {
    if (arr[0] === target) {
      return idx;
    }
    if (idx === len) {
      return -1;
    }
    return recursiveSearch(arr.slice(1), idx + 1);
  }
  return recursiveSearch(arr, 0);
}

let arr = [5, 2, 3, 8, 4, 3, 9, 8];
let target = 3;
console.log(firstIndex(arr, target))