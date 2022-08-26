// Leetcode 383: Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let ransFreq = new Map();
  let magFreq = new Map();

  // Setting frequencies of each character in ransom note
  for (let i = 0; i < ransomNote.length; i++) {
    if (ransFreq.has(ransomNote[i])) {
      ransFreq.set(ransomNote[i], ransFreq.get(ransomNote[i]) + 1);
    } else {
      ransFreq.set(ransomNote[i], 1);
    }
  }
  // Setting frequencies of each character in magazine
  for (let i = 0; i < magazine.length; i++) {
    if (magFreq.has(magazine[i])) {
      magFreq.set(magazine[i], magFreq.get(magazine[i]) + 1);
    } else {
      magFreq.set(magazine[i], 1);
    }
  }

  // Validating if the ransom note can be formed using magazine
  for (const [alphabet, count] of ransFreq.entries()) {
    if (!magFreq.get(alphabet) || count > magFreq.get(alphabet)) {
      return false;
    } 
  }
  return true;
};

console.log(canConstruct("aaccd", "aabccd"));
