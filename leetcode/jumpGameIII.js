// Leetcode 1306: Jump Game III
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, idx) {
  
  let set = new Set();
  
  function reach(arr, idx) {
    if (idx >= 0 && idx <= arr.length - 1) {
      if (arr[idx] === 0) {
          return true;
      } 
    } else {
      return false;
    }
    
    if (set.has(idx)) {
      return false;
    } else {
      set.add(idx);
    }

    return reach(arr, idx + arr[idx]) || reach(arr, idx - arr[idx]);
  }
  return reach(arr, idx);
};


let arr = [4,2,3,0,3,1,2];
console.log(canReach(arr, 0));
