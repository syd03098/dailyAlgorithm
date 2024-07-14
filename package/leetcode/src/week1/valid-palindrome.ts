function isPalindrome(s: string): boolean {
  const foo = s
    .trim()
    .replace(/[^A-Za-z0-9]/g, '')
    .toLowerCase()
  const bar = [...foo].reverse().join('')

  return foo === bar
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('A man, a plan, a canal: Panama', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy()
  })

  it('race a car', () => {
    expect(isPalindrome('race a car')).toBeFalsy()
  })

  it(' ', () => {
    expect(isPalindrome(' ')).toBeTruthy()
  })

  it('ab_a', () => {
    expect(isPalindrome('ab_a')).toBeTruthy()
  })
}
