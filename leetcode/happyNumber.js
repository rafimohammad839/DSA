// Leetcode 202: Happy Number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let set = new Set();
  while (!set.has(n)) {
    set.add(n);
    n = computeSquareSum(n);
    if (n === 1) {
      return true;
    }
  }
  return false;
};

function computeSquareSum(n) {
  let mod, sum = 0;
  while (n) {
    mod = n % 10;
    sum = sum + mod * mod;
    n = Math.floor(n / 10);
  }
  return sum;
}

let n = 19
console.log(isHappy(n));

