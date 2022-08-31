// Leetcode 17: Letter Combinations of a Phone Number
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  let result = [];
  let options = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  helperFun(digits, "", options, result);
  return result;
};

function helperFun(digits, output, options, result) {
  if (digits.length === 0) {
    result.push(output);
    return;
  }
  let n = digits.charAt(0);
  let s = options[n];
  for (let i = 0; i < s.length; i++) {
    helperFun(digits.slice(1), output + s[i], options, result);
  }
}