function compareArrays(a: (string | number)[], b: (string | number)[]) {
  return (
    a.length === b.length && a.every((element, index) => element === b[index])
  )
}

function isAnagram(s: string, t: string): boolean {
  const foo = new Map<string, number>()
  const bar = new Map<string, number>()

  if (s.length !== t.length) {
    return false
  }

  for (const i in s.split('')) {
    foo.set(s[i], (foo.get(s[i]) ?? 0) + 1)
    bar.set(t[i], (bar.get(t[i]) ?? 0) + 1)
  }

  return [...foo.keys()].every((key) => {
    return bar.has(key) && bar.get(key) === foo.get(key)
  })
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('s = "anagram", t = "nagaram"', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy()
  })

  it('s = "rat", t = "car"', () => {
    expect(isAnagram('rat', 'car')).toBeFalsy()
  })

  it('s = "aa", t = "bb"', () => {
    expect(isAnagram('aa', 'bb')).toBeFalsy()
  })
}
