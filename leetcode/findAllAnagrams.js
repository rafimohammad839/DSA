// Leetcode 438: Find All Anagrams in a String
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  
  let pFreq = Array(26).fill(0);
  let windowFreq = Array(26).fill(0);
  
  let pLen = p.length;
  let sLen = s.length;
  
  for (let i = 0; i < pLen; i++) {
    pFreq[p.charCodeAt(i) - 97]++
    windowFreq[s.charCodeAt(i) - 97]++
  }

  let res = [];
  
  if (compareArrays(pFreq, windowFreq)) res.push(0);

  for (let i = pLen; i < sLen; i++) {
    windowFreq[s.charCodeAt(i - pLen) - 97]--;
    windowFreq[s.charCodeAt(i) - 97]++;

    if (compareArrays(pFreq, windowFreq)) res.push(i - pLen+1);
  }

  return res; // Returning the result with starting indices
  // of all anagrams in s
};

function compareArrays(arr1, arr2) {
  return arr1.every((val, idx) => val === arr2[idx]);
}

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));