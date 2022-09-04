const isPalindrome = (s) => {
  const cleaned = s
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')

  const len = cleaned.length

  for (let i = 0; i < len / 2; i++) {
    if (cleaned[i] != cleaned[cleaned.length - 1 - i]) return false
  }
  return true
}

module.exports = isPalindrome
