const parentheses = require('./parentheses')

describe('Parentheses', () => {
  it('Example 1', () => {
    expect(parentheses('()')).toBe(true)
  })

  it('Example 2', () => {
    expect(parentheses('()[]{}')).toBe(true)
  })

  it('Example 3', () => {
    expect(parentheses('(]')).toBe(false)
  })

  it('Example 4', () => {
    expect(parentheses('{[]}')).toBe(true)
  })
})
