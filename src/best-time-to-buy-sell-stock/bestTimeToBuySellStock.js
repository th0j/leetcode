/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
  if (prices == null || prices.length <= 1) return 0

  let min = prices[0]
  let maxProfit = 0

  for (const price of prices) {
    min = Math.min(price, min)
    let profit = price - min
    maxProfit = Math.max(profit, maxProfit)
  }

  return maxProfit
}

module.exports = maxProfit
