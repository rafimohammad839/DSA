// Question: Given a string S. For each index i(1<=i<=N-1), erase it if s[i] is equal to s[i-1] in the string.
// Geeksforgeeks practice link: https://practice.geeksforgeeks.org/problems/consecutive-elements2306/1
/**
 * @param {string} s
 * @returns {string}
 */
class Solution {
  removeConsecutiveCharacter(s) {
    if (s.length === 0 || s.length === 1) {
      return s;
    }
    if (s[0] === s[1]) {
      let index = 1;
      while (s[0] === s[index] && index < s.length) {
        index++;
      }
      return s[0] + this.removeConsecutiveCharacter(s.substring(index));
    } else {
      return s[0] + this.removeConsecutiveCharacter(s.substring(1));
    }
  }
}

let sol = new Solution();
let res = sol.removeConsecutiveCharacter("aabcc");
console.log(res);