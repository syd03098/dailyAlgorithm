import { describe, test, expect } from 'vitest'
import { searchInsert } from './searchInsertPosition'

describe('searchInsertPosition', () => {
  test('nums = [1,3,5,6], target = 5', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
  })

  test('nums = [1,3,5,6], target = 2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
  })

  test('nums = [1,3,5,6], target = 7', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
  })

  test('nums = [3,5,7,9,10], target = 8', () => {
    expect(searchInsert([3, 5, 7, 9, 10], 8)).toBe(3)
  })
})
