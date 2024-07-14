function maxProfit(prices: number[]): number {
  let buy = prices[0]
  let profit = 0

  for (let i = 1; i < prices.length; ++i) {
    const price = prices[i]

    if (price < buy) {
      buy = price
    } else if (price - buy > profit) {
      profit = price - buy
    }
  }

  return profit
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('[7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })

  it('[7,6,4,3,1]', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })

  it('[1]', () => {
    expect(maxProfit([1])).toBe(0)
  })

  it('[1,2,4,2,5,7,2,4,9,0,9]', () => {
    expect(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9])).toBe(9)
  })
}
