// Leetcode 121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = Number.MAX_VALUE;
  for (let price of prices) {
    min = Math.min(min, price);
    maxProfit = Math.max(maxProfit, price - min);
  }
  return maxProfit;
};

let prices = [7,1,5,3,6,4]
//output: 5
console.log(maxProfit(prices));
