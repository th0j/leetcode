const maxProfit = require('./bestTimeToBuySellStock')

describe('Best Time to Buy and Sell Stock', () => {
  it('Example 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
  })
  it('Example 2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
  })
})
