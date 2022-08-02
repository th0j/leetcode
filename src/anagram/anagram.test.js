const anagram = require('./anagram')

describe('Anagram', () => {
  it('Example 1', () => {
    expect(anagram('anagram', 'nagaram')).toBe(true)
  })

  it('Example 2', () => {
    expect(anagram('rat', 'car')).toBe(false)
  })
})
