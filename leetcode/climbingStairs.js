// Leetcode 70: Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */

// ------------------------------------------------------------ Solution 1 | Memoization
// var climbStairs = function (n) {
//   let dp = {};
//   function climb(n, dp) {
//     if (n === 1 || n === 2) {
//       return n;
//     }
//     if (n in dp) return dp[n];
//     return dp[n] = climb(n - 1, dp) + climb(n - 2, dp);
//   }
//   return climb(n, dp);
// };


// ------------------------------------------------------------ Solution 2 | 1D Array Dynamic Programming
// var climbStairs = function (n) {
//   let dp = new Array(n + 1).fill(0);
//   dp[0] = 1;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };


// ------------------------------------------------------------ Solution 3 | Constant Space Dynamic Programming
var climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let first = 1;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }
  return second;
};

let n = 4;
console.log(climbStairs(n));

