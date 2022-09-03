// Leetcode 91: Decode Ways
/**
 * @param {string} s
 * @return {number}
*/
// -------------------------------------------------------------------- DP Solution | Time - O(N)
var numDecodings = function(s) {
  let dp = { [s.length]: 1 };
  function decode(i) {
    if (i in dp) {
      return dp[i];
    }
    if (s[i] === '0') {
      return 0;
    }
    let res = decode(i + 1);
    if (i < s.length && s[i] === '1' && s[i+1] !== undefined || (s[i] === '2' && "0123456".includes(s[i + 1]))) {
      res += decode(i + 2);
    }
    dp[i] = res;
    return res;
  }
  return decode(0);
};

let str = "12";
console.log(numDecodings(str));