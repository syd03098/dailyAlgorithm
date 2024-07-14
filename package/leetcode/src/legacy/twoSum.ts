// Runtime: 331 ms, faster than 9.50% of TypeScript online submissions for Two Sum.
// Memory Usage: 44.1 MB, less than 95.46% of TypeScript online submissions for Two Sum.
export function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (i === j) {
        continue
      }

      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
