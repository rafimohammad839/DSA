// Leetcode 122: Best Time to Buy and Sell Stock II
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));