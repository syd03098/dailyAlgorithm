export function topKFrequent(nums: number[], k: number): number[] {
  const results: Record<number, number> = {}
  for (const num of nums) {
    if (results[num] === undefined) {
      results[num] = 1
    } else {
      results[num] += 1
    }
  }

  return Object.entries(results)
    .sort(([_, a], [__, b]) => b - a)
    .map(([a, _]) => Number(a))
    .slice(0, k)
}
