// Leetcode 49: Group Anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let res = {};
  for (let s of strs) {
    let count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - 97]++
    }
    count = JSON.stringify(count);
    if (count in res) {
      res[count].push(s);
    } else {
      res[count] = [s];
    }
  }
  return Object.values(res);
};

let strs = ["bdddddddddd","bbbbbbbbbbc"]
console.log(groupAnagrams(strs));