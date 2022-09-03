// Leetcode 639: Decode Ways II
/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function (s) {
  let mod = Math.pow(10, 9) + 7; 
  let dp = {};
  let len = s.length;
  let count = decode(s, 0, len, dp, mod);
  return count;
};

function decode(s, i, len, dp, mod) {
  if (i === len) {
    return 1;
  }
  if (s[i] === "0") {
    return 0;
  }
  if (i in dp) {
    return dp[i];
  }
  let mult = 1;
  if (s[i] === "*") {
    mult = 9;
  }
  let res = 0;
  res += mult * decode(s, i + 1, len, dp, mod);
  if (i < len - 1) {
    let opts = 0;
    if (s[i] === "*") {
      if (s[i + 1] === "*") {
        opts = 15;
      } else if (parseInt(s[i + 1]) <= 6) {
        opts = 2;
      } else {
        opts = 1;
      }
    } else if (parseInt(s[i]) < 3) {
      if (s[i + 1] === "*") {
        if (parseInt(s[i]) === 1) {
          opts = 9;
        } else {
          opts = 6;
        }
      } else if (parseInt(s[i]+s[i+1]) <= 26) {
        opts = 1;
      }
    }
    if (opts) {
      res += opts * decode(s, i + 2, len, dp, mod);
    }

  }
  return (dp[i] = res % mod);
}
let str = "1126";
console.log(numDecodings(str));
