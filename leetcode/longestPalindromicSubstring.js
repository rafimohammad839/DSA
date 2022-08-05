// Leetcode 5: Longest Palindromic Substring
/**
 * @param {string} s
 * @return {string}
 */
// --------------------------------------- Efficient Solution | Time - O(N^2) | Space - O(1)
var longestPalindrome = function(s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromMiddle(s, i, i);
    let len2 = expandFromMiddle(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start + 1) {
      console.log("Inside if statement")
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

function expandFromMiddle(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

let str = "rfkqyuqfjkxy";
console.log(longestPalindrome(str));