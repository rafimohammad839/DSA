// Leetcode 409: Longest Palindrome
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let longest = 0;
  let oddCount;
  let freqCount = new Map();
  for (let i = 0; i < s.length; i++) {
    if (freqCount.has(s.charAt(i))) {
      freqCount.set(s.charAt(i), freqCount.get(s.charAt(i)) + 1);
    } else {
      freqCount.set(s.charAt(i), 1);
    }
  }

  for (const [_, count] of freqCount.entries()) {
    longest += Math.floor(count / 2) * 2;
    if (longest % 2 === 0 && count % 2 === 1) {
      longest += 1;
    }
  }
  return longest;
};

let str = "abccccdd";
console.log(longestPalindrome(str));