/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i]
    else hash[target - nums[i]] = i
  }

  return []
}

module.exports = twoSum
