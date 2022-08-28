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
    if (s.charAt(i) === "+") {
      continue;
    }
    let n = s.charAt(i) - '0';
    currNum = currNum * 10 + n;
  }
  
  if (isNegative) {
    if (currNum >= Math.pow(2, 31)) {
      return Math.pow(2, 31) * -1;
    } else {
      return currNum * -1;
    }
  } else {
    if (currNum >= Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1;
    } else {
      return currNum;
    }
  }
};

let str = "   +42";
let num = myAtoi(str);
console.log(num);