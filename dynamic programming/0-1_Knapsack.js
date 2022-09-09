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
// class Solution {
//   //Function to return max value that can be put in knapsack of capacity W.
//   // memo = {};
//   dp = [];
//   knapSack(W, wt, val, n) {
//     this.dp = Array(W + 1).fill(0).map(() => Array(n + 1).fill(-1));
//     return this.knapSackHelper(W, wt, val, n, this.dp);
//   }

//   knapSackHelper(W, wt, val, n, dp) {
//     if (dp[W][n] !== -1) {
//       return dp[W][n];
//     }

//     if (n === 0 || W === 0) {
//       return 0;
//     }

//     if (wt[n - 1] > W) {
//       return dp[W][n] = this.knapSackHelper(W, wt, val, n - 1, dp);
//     }

//     return dp[W][n] = Math.max(val[n - 1] + this.knapSackHelper(W - wt[n - 1], wt, val, n - 1, dp), this.knapSackHelper(W, wt, val, n - 1, dp));
//   }
// }


//---------------------------------------------------------------- Solution 3 | Dynamic Programming - Bottom Up
function knapSack(W, weights, values, n) {
  let dp = new Array(n + 1).fill(-1).map(() => new Array(W + 1).fill(-1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else {
        if (weights[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(values[i - 1] + dp[i - 1][j - weights[i - 1]], dp[i - 1][j]);
        }
      }
    }
  }
  return dp[n][W];
}

let weights = [10, 20, 30];
let values = [60, 100, 120];
let W = 50;
let n = values.length;

// let sol = new Solution();

console.log(knapSack(W, weights, values, n));