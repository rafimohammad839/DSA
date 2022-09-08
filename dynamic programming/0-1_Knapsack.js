// Question: You are given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.

// ---------------------------------------------------------------- Solution 1 | Bruteforce
// function knapSack(w, v, W) {
//   let n = v.length;
//   let memo = {};
//   function knapSackHelper(n, w, v, W) {
//     if (memo[n]) return memo[n];

//     if (n === -1 || W === 0) {
//       return 0;
//     }

//     if (w[n] > W) {
//       return memo[n] = knapSackHelper(n - 1, w, v, W);
//     }

//     return memo[n] = Math.max(v[n] + knapSackHelper(n - 1, w, v, W - w[n]), knapSackHelper(n - 1, w, v, W));

//   }
//   return knapSackHelper(n - 1, w, v, W);
// }


// ---------------------------------------------------------------- Solution 2 | Dynamic Programming - Top Down
class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  // memo = {};
  dp = [];
  knapSack(W, wt, val, n) {
    this.dp = Array(W + 1).fill(0).map(() => Array(n + 1).fill(-1));
    return this.knapSackHelper(W, wt, val, n, this.dp);
  }

  knapSackHelper(W, wt, val, n, dp) { 
    if (dp[W][n] !== -1) {
      return dp[W][n];
    }

    if (n === 0 || W === 0) {
      return 0;
    }

    if (wt[n - 1] > W) {
      return dp[W][n] = this.knapSackHelper(W, wt, val, n - 1, dp);
    }

    return dp[W][n] = Math.max(val[n - 1] + this.knapSackHelper(W - wt[n - 1], wt, val, n - 1, dp), this.knapSackHelper(W, wt, val, n - 1, dp));
  }
}

let values = [1, 2, 3];
let weights = [4, 5, 1];
let W = 4;
let n = values.length;

let sol = new Solution();

console.log(sol.knapSack(W, weights, values, n));