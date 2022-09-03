const search = require('./binary-search')

describe('Binary Search', () => {
  it('Example 1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  })

  it('Example 2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  })

  it('Example 3', () => {
    expect(search([5], 5)).toEqual(0)
  })
})
