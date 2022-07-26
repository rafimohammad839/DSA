// Leetcode 7: Reverse Integer
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let y = Math.abs(x);
  let pop;
  let reversed = 0;
  while (y > 0) {
      pop = y % 10;
      reversed = reversed * 10 + pop;
      y = Math.trunc(y / 10);
  }
  if (x > 0 && reversed >= Math.pow(2, 31)) {
      return 0;
  }
  if (x < 0 && reversed > Math.pow(2, 31)) {
      return 0;
  }
  
  if (x < 0) {
      return -Math.abs(reversed);
  }
  return reversed;
};

console.log(reverse(1534236469));
// Output: 0 since it goes out of the positive 32-bit integer