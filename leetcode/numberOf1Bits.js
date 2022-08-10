// Leetcode 191: Number of 1 Bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// ----------------------------------- Solution 1 | Less Efficient | Time - O(1) | Need to check every bit
//  var hammingWeight = function(n) {
//   let count = 0;
//   while (n) {
//       count += n % 2;
//       n = n >> 1;
//   }
//   return count;
// };

// ----------------------------------- Solution 2 | More Efficient | Time - O(1) | Need to check only one bits
var hammingWeight = function(n) {
  let count = 0;
  while (n) {
      n = n & (n - 1);
      count += 1;
  }
  return count;
};
