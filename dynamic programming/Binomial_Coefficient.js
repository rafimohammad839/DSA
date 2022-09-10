// Question: Given two integers n and r, find nCr. Since the answer may be very large, calculate the answer modulo 109+7.
// Problem Link: https://practice.geeksforgeeks.org/problems/ncr1019/1

/**
 * @param {number} n
 * @param {number} r
 * @returns {number}
*/
// ------------------------------------------------------------------------- Optimal Solution | DP | Time - O(n x r)
class Solution{
  dp
  nCr(n, r){
    if (n < r) {
      return 0;
    }
    if (n - r < r) {
      r = n - r;
    }
    this.dp = new Array(r + 1).fill(0);
    this.dp[0] = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = Math.min(i, r); j > 0; j--) {
        this.dp[j] = (this.dp[j] + this.dp[j - 1]) % 1000000007;
      }
    }
    return this.dp[r];
  }
}

let sol = new Solution();
console.log(sol.nCr(4, 3));