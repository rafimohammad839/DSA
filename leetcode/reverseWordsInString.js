// Leetcode 151: Reverse Words in a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.trim().split(" ");
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      arr[j++] = arr[i];
    }
  }
  arr = arr.slice(0, j);
  return arr.reverse().join(" ");
};

let str = "the quick brown frog jumped       over the lazy     dog    ";
console.log(reverseWords(str));