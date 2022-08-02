/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function anagram(s, t) {
  if (s.length != t.length) return false

  const hash = {}
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) hash[s[i]]++
    else hash[s[i]] = 1
  }

  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) return false
    hash[t[i]]--
  }

  return true
}

module.exports = anagram
