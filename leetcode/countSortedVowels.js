// Leetcode 1641: Count Sorted Vowel Strings
/**
 * @param {number} n
 * @return {number}
 */
// ---------------------------------------------------------------- Solution 1 | Recursion | Time - O(5^N) | Space - O(N)
// var countVowelStrings = function(n) {
//   let count = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   function dfs(n, l, vowels) {
//     if (n === 0) {
//       count++;
//       return;
//     }

//     if (n < 0) {
//       return;
//     }

//     for (let i = l; i < vowels.length; i++) {
//       dfs(n - 1, i, vowels);
//     }
//   }
//   dfs(n, 0, vowels);
//   return count;
// };

// ---------------------------------------------------------------- Solution 2 | Dynamic Programming | Time - O(N) | Space - O(1)
var countVowelStrings = function(n) {
  let dp = new Array(5).fill(1);
  let sum = 0;
  while (n > 1) {
    for (let i = 1; i < dp.length; i++) {
      dp[i] += dp[i - 1];
    }
    n--;
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