/**
 * Runtime: 1104 ms, faster than 33.90% of TypeScript online submissions for Rotate Array.
 * Memory Usage: 52 MB, less than 65.25% of TypeScript online submissions for Rotate Array.
 */

/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): number[] {
  const array = [...nums]
  for (let i = 0; i < k; i++) {
    const a = array.pop()
    array.unshift(a!)
  }

  return array
}
