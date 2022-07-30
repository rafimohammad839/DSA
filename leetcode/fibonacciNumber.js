// Leetcode 509: Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n, memo) {
  memo = memo || {};
  if (n in memo) return memo[n];
  if (n <= 1) {
    return n;
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.time();
console.log(fib(40));
console.timeEnd();
