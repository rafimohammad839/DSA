// Leetcode 1641: Count Sorted Vowel Strings
/**
 * @param {number} n
 * @return {number}
 */
// ---------------------------------------------------------------- Solution 1 | Recursion | Time - O(5^N) | Space - O(N)
// var countVowelStrings = function(n) {
//   let numberOfVowels = 5;
//   function dfs(n, l) {
//     if (n === 0) {
//       return 1;
//     }
//     let count = 0;
//     for (let i = l; i < numberOfVowels; i++) {
//       count += dfs(n - 1, i);
//     }
//     return count;
//   }
//   return dfs(n, 0);
// };

// ---------------------------------------------------------------- Solution 2 | Dynamic Programming | Time - O(N) | Space - O(1)
var countVowelStrings = function(n) {
  let dp = new Array(5).fill(1);
  let sum = 0;
  while (--n) {
    for (let i = 1; i < dp.length; i++) {
      dp[i] += dp[i - 1];
    }
  }
  for (let i = 0; i < dp.length; i++) {
    sum += dp[i];
  }
  return sum;
};

let n = 33;
console.time()
console.log(countVowelStrings(n));
console.timeEnd();