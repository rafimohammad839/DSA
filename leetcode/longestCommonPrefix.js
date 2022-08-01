//Leetcode 14: Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  let prefixLength = prefix.length;
  for (let i = 1; i < strs.length; i++) {
    let current = strs[i]; 
    for (let i = 0; i < prefixLength; i++) {
      if (current[i] !== prefix[i]) {
        prefix = prefix.substring(0, i);
      }
    }
  }
  return prefix;
};
let strs = ["flow", "flower", "flight"];
console.log(longestCommonPrefix(strs));