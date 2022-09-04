// Leetcode 509: Fibonacci Number
/**
 * @param {number} n
 * @return {number}
 */
// ------------------------------------------------------------ Solution 1 | Recursion with Memoization | Time - O(N) | Space - O(N)
// var fib = function (n, memo) {
//   memo = memo || {};
//   if (n in memo) return memo[n];
//   if (n <= 1) {
//     return n;
//   }
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// };

// ----------------------------------- Solution 2 | Dynamic Programming Solution | Time - O(N)
var fib = function(n) {
  if (n < 2) {
    return n;
  }
  let first = 0;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    let temp = second;
    second = first + second;
    first = temp;
  }
  return second;
};

console.time();
console.log(fib(40));
console.timeEnd();
