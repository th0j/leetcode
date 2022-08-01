/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
  const hash = new Map()
  hash.set('{', '}')
  hash.set('[', ']')
  hash.set('(', ')')

  let stack = []

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] == stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(hash.get(s[i]))
    }
  }

  return stack.length == 0
}

module.exports = isValid
