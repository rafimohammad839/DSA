// Leetcode 1291: Sequential Digits
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  let res = [];
  for (let i = 1; i <= 9; i++) {
    dfs(low, high, i, 0, res);
  }
  return res.sort((a, b) => a - b)
};

function dfs(low, high, i, num, res) {
  if (num >= low && num <= high) {
    res.push(num);
  }
  
  if (num > high || i > 9) {
    return;
  }
  
  dfs(low, high, i + 1, num * 10 + i, res);
}

let low = 1000, high = 13000;
console.log(sequentialDigits(low, high));