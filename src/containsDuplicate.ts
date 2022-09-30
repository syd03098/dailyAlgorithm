// Runtime: 193 ms, faster than 22.89% of TypeScript online submissions for Contains Duplicate.
// Memory Usage: 52.4 MB, less than 7.50% of TypeScript online submissions for Contains Duplicate.
export function containsDuplicate(nums: number[]): boolean {
    const map: Record<string, number> = {}
    for (const num of nums) {
        const key = num.toString()
        if (map[key] === undefined) {
            map[key] = 1
        } else {
            return true
        }
    }

    return false
}
