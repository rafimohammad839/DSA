// Question: Given an array of non-negative integers, and a value sum, determine if there is a subset
// of the given set with sum equal to given sum
// Problem Link: https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1

// --------------------------------------------------------------------- Solution 1 | Top Down DP
// class Solution {
//   dp
//   isSubsetSum(arr,n,sum){
//     this.dp = new Array(n + 1).fill(-1).map(() => new Array(sum + 1).fill(-1));
//     return this.isSum(arr, n, sum);
//   }
//   isSum(arr, n, sum) {
//       if (sum === 0) {
//           return true;
//       }
//       if (n === 0 && sum > 0) {
//           return false;
//       }
//       if (this.dp[n][sum] !== -1) {
//           return this.dp[n][sum];
//       }
//       if (arr[n - 1] > sum) {
//           return this.dp[n][sum] = this.isSubsetSum(arr, n - 1, sum);
//       }
//       return this.dp[n][sum] = this.isSubsetSum(arr, n - 1, sum - arr[n - 1]) || this.isSubsetSum(arr, n - 1, sum);
//   }
// }


// --------------------------------------------------------------------- Solution 2 | Bottom Up DP
class Solution {
  dp
  isSubsetSum(arr,n,sum){
    this.dp = new Array(n + 1).fill(-1).map(() => new Array(sum + 1).fill(-1));
    return this.isSum(arr, n, sum);
  }
  isSum(arr, n, sum) {
    for (let i = 0; i < n + 1; i++) {
      for (let j = 0; j < sum + 1; j++) {

        if (j === 0) {
          this.dp[i][j] = true;
        } else if (i === 0) {
          this.dp[i][j] = false;
        } else if (arr[i - 1] > j) {
          this.dp[i][j] = this.dp[i - 1][j];
        } else {
          this.dp[i][j] = this.dp[i - 1][j - arr[i - 1]] || this.dp[i - 1][j];
        }

      }
    }
    return this.dp[n][sum];
  }
}

let sol = new Solution();
let arr = [3, 34, 4, 12, 5, 2];
let sum = 9;
let n = arr.length;
console.log(sol.isSubsetSum(arr, n, sum))