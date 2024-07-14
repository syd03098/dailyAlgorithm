/**
 * Runtime: 131 ms, faster than 5.78% of TypeScript online submissions for Search Insert Position.
 * Memory Usage: 44.6 MB, less than 44.64% of TypeScript online submissions for Search Insert Position.
 */
function binarySearch(nums: number[], target: number) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}

export function searchInsert(nums: number[], target: number): number {
  const result = binarySearch(nums, target)
  if (result !== -1) {
    return result
  }

  const array = [...nums, target].sort((a, b) => a - b)
  return binarySearch(array, target)
}
