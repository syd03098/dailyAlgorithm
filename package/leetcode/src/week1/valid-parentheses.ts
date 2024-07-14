function isValid(s: string): boolean {
  let stack: string[] = []

  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      if (stack.length === 0) {
        return false
      }
      if (
        (c === ')' && stack[stack.length - 1] !== '(') ||
        (c === ']' && stack[stack.length - 1] !== '[') ||
        (c === '}' && stack[stack.length - 1] !== '{')
      ) {
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('()', () => {
    expect(isValid('()')).toBe(true)
  })

  it('()[]{}', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  it('(]', () => {
    expect(isValid('(]')).toBe(false)
  })

  it('([)]', () => {
    expect(isValid('([)]')).toBe(false)
  })
}
