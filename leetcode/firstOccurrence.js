// Leetcode 28: Find the Index of the First Occurrence in a String
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let n = needle.length;
  let m = haystack.length;
  let search_space = m - n + 1;
  for (let i = 0; i < search_space; i++) {
    let temp = haystack.substring(i, n + i);
    if (temp === needle) {
        return i;
    }
  }
  return -1;
};

let haystack = "sadbutsad", needle = "sad";
console.log(strStr(haystack, needle));