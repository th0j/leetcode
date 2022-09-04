const isPalindrome = require('./palindrome')

describe('Palindrome', () => {
  it('Example 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  it('Example 2', () => {
    expect(isPalindrome('race a car')).toBe(false)
  })

  it('Example 3', () => {
    expect(isPalindrome(' ')).toBe(true)
  })

  it('Example 4', () => {
    expect(isPalindrome('aa')).toBe(true)
  })
})
