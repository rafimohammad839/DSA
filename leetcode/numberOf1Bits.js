// Leetcode 191: Number of 1 Bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// ----------------------------------- Solution 1 | Less Efficient
 var hammingWeight = function(n) {
  let count = 0;
  while (n) {
      count += n % 2;
      n = n >> 1;
  }
  return count;
};
