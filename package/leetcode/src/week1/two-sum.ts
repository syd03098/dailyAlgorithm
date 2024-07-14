import { describe } from 'node:test'

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number[]>()

  for (const n1 in nums) {
    for (const n2 in nums) {
      if (n1 === n2) {
        continue
      }
      const number1 = nums[Number(n1)]
      const number2 = nums[Number(n2)]

      if (number1 + number2 === target) {
        return [Number(n1), Number(n2)]
      }
      map.set(number1 + number2, [Number(n1), Number(n2)])
    }
  }

  return map.get(target) ?? []
}

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest

  /**
   * not solved yet
   */
  describe.todo('two-sum', () => {
    it('nums = [2,7,11,15], target = 9', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    })

    it('nums = [3,2,4], target = 6', () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    })

    it('nums = [3,3], target = 6', () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1])
    })
  })
}
