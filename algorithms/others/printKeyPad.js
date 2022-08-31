// Possible Words From Phone Digits
// function printKeyPadHelper(num, output, options) {
//   if (num === 0) {
//     console.log(output);
//     return;
//   }
//   let n1 = num % 10;
//   let s = options[n1];
//   for (let i = 0; i < s.length; i++) {
//     printKeyPadHelper(Math.floor(num / 10), s[i] + output, options);
//   }
// }

// function printKeyPad(num) {
//   let options = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
//   printKeyPadHelper(num, "", options);
// }

// let num = 234;
// printKeyPad(num);

// Question on Geeksforgeeks. Link: https://practice.geeksforgeeks.org/problems/possible-words-from-phone-digits-1587115620/1
/**
 * @param {number[]} a
 * @param {number} N
 * @returns {string[]}
*/
class Solution {
  possibleWords(a, N) {
    let result = [];
    let options = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];     
    this.helperFun(a, "", options, result, N);
    return result;
  }
  helperFun(arr, output, options, result, N) {
    if (N === 0) {
      result.push(output);
      return;
    }
    let n = arr[0];
    let s = options[n];
    for (let i = 0; i < s.length; i++) {
        this.helperFun(arr.slice(1), output + s[i], options, result, N - 1);
    }
  }
}

let solution = new Solution();
let resultArr = solution.possibleWords([2, 3], 2);
// Expected output: ad ae af bd be bf cd ce cf 
console.log(resultArr.join(' '));