/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
  let left = 0
  let right = nums.length
  let mid = 0

  while (left <= right) {
    mid = Math.round((left + right) / 2)
    if (target == nums[mid]) return mid

    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

module.exports = search
