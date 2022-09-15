// Leetcode 438: Find All Anagrams in a String
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
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
  let status = true;
  for (let i = 0; i < 26; i++) {
    if (pFreq[i] !== windowFreq[i]) status = false;
  }
  if (status) res.push(0);

  for (let i = pLen; i < sLen; i++) {
    windowFreq[s.charCodeAt(i - pLen) - 97]--;
    windowFreq[s.charCodeAt(i) - 97]++;

    let status = true;
    for (let i = 0; i < 26; i++) {
      if (pFreq[i] !== windowFreq[i]) status = false;
    }

    if (status) res.push(i - pLen+1);
  }

  return res; // Returning the result with starting indices
  // of all anagrams in s
};

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));