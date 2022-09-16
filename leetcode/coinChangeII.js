// Leetcode 518: Coin Change II
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
  let len = coins.length;
  let dp = new Array(len).fill(-1).map(() => new Array(amount + 1).fill(-1));
  function countWays(amount, coins, idx) {
    if (amount === 0) {
      return 1;
    }
    if (idx === len) {
      return 0;
    }

    if (dp[idx][amount] !== -1) return dp[idx][amount];

    let count = 0;
    
    if (coins[idx] > amount) {
      count += countWays(amount, coins, idx + 1);
    } else {
      count += countWays(amount - coins[idx], coins, idx) + countWays(amount, coins, idx + 1);
    }

    return dp[idx][amount] = count
  }
  return countWays(amount, coins, 0);
};

let coins = [1, 2, 5], amount = 5;
console.log(change(amount, coins));