// Leetcode 216: Combination Sum III
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let temp = [];
  let res = [];
  function dfs(k, n, l, temp, res) {
    if (n === 0 && k === 0) {
      let copy = JSON.parse(JSON.stringify(temp));
      res.push(copy);
      return;
    }
    if (k === 0) {
      return;
    }

    for (let i = l; i <= 9; i++) {
      temp.push(i);
      dfs(k - 1, n - i, i + 1, temp, res);
      temp.pop();
    }

  }
  dfs(k, n, 1, temp, res);
  return res;
};

let k = 3, n = 9;
console.log(combinationSum3(k, n));