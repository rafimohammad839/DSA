// Leetcode 1641: Count Sorted Vowel Strings
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  function dfs(n, l, vowels, output) {
    if (n === 0) {
      count++;
      return;
    }

    if (n < 0) {
      return;
    }

    for (let i = l; i < vowels.length; i++) {
      dfs(n - 1, i, vowels, output + vowels[i]);
    }
  }
  dfs(n, 0, vowels, "");
  return count;
};

let n = 33;
console.time()
console.log(countVowelStrings(n));
console.timeEnd();