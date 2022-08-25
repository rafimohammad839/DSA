// Leetcode 709: To Lower Case
/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (code > 64 && code < 91) {
      result += String.fromCharCode(code + 32);
    } else {
      result += s.charAt(i);
    }
  }
  return result;
};

let str = "Hello";
console.log(toLowerCase(str));