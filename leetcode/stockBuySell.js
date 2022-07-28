// Leetcode 121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min
    }
  }
  return maxProfit;
};

let prices = [7,1,5,3,6,4]
//output: 7
console.log(maxProfit(prices));
