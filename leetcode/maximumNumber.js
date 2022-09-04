// Leetcode 670: Maximum Swap
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let numStr = num.toString();
  let max = numStr;
  let k = 1;
  
  function maxSwap(str, k, l) {

    if (k === 0) {
      return;
    }
    
    // Finding the maximum number
    let maxi = str[l];
    for (let i = l; i < str.length; i++) {
      if (maxi < str[i]) {
        maxi = str[i];
      }
    }
    
    if (maxi !== str[l]) {
      k -= 1;
    }
    
    // Swapping & Recursive call
    for (let i = l; i < str.length; i++) {
      if (str[i] === maxi) {
        str = swap(str, i, l);
        max = Math.max(max, str);
        maxSwap(str, k, l + 1);
        str = swap(str, i, l);
      }
    }
    
  }
  
  maxSwap(numStr, k, 0);
  return max;
  
};

function swap(str, i, j) {
  let strArr = str.split('');
  let temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
  return strArr.join("");
}

let num = 2736;
console.log(maximumSwap(num));