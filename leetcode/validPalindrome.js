// Leetcode 125: Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let fixedString = "";
  // Getting rid of unnecessary characters except for alpha-numeric ones
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      fixedString += s[i];
    }
  }

  // Converting to lowercase
  fixedString = fixedString.toLowerCase();

  // Checking the reverse of the string
  let start = 0;
  let end = fixedString.length - 1;
  while (start < end) {
    if (fixedString[start] != fixedString[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));