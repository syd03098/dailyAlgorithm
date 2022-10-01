/**
 * Runtime: 207 ms, faster than 28.73% of TypeScript online submissions for Squares of a Sorted Array.
 * Memory Usage: 49.6 MB, less than 55.88% of TypeScript online submissions for Squares of a Sorted Array.
 */
export function sortedSquares(nums: number[]): number[] {
    let result = []
    for (const num of nums) {
        result.push(num ** 2)
    }

    return result.sort((a, b) => a - b)
}
