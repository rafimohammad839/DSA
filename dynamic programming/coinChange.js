// Leetcode 322: Coin Change
var coinChange = function (coins, amount) {
  let dp = new Array(coins.length)
    .fill(-1)
    .map(() => new Array(amount + 1).fill(-1));

  function helper(amount, i) {
    if (amount === 0) return 0;
    if (amount < 0) {
      return Number.MAX_SAFE_INTEGER;
    }
    if (i === coins.length && amount > 0) return Number.MAX_SAFE_INTEGER;

    if (dp[i][amount] !== -1) return dp[i][amount];

    return (dp[i][amount] = Math.min(
      1 + helper(amount - coins[i], i),
      helper(amount, i + 1)
    ));
  }

  const count = helper(amount, 0);
  return count === Number.MAX_SAFE_INTEGER ? -1 : count;
};

let coins = [411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422],
  amount = 9864;
console.time();
console.log(coinChange(coins, amount));
console.timeEnd();
