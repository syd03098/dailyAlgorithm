function search(nums: number[], target: number): number {
  return 0
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('[-1,0,3,5,9,12], 4', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
  })

  it('[-1,0,3,5,9,12], 2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })
}
