// Leetcode 8: String to Integer (atoi)
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function (s) {
  if (!s.length) return 0;
  let isNegative = false;
  let currNum = 0;
  s = s.trim();
  let start = 0;
  if (s.charAt(0) === "-") {
    isNegative = true;
    start = 1;
  } else if (s.charAt(0) === '+') {
    start = 1;
  }
  for (let i = start; i < s.length && s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57; i++) {
    let n = s.charAt(i) - '0';
    currNum = currNum * 10 + n;
  }
  if (currNum > 0x7FFFFFFF) {
    return isNegative ? -0x7FFFFFFF - 1 : 0x7FFFFFFF;
  }
  return isNegative ? -currNum : currNum;
};

let str = "   -42";
let num = myAtoi(str);
console.log(num);