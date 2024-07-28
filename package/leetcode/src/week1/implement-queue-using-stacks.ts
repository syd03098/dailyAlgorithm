class MyQueue {
  #list: number[]

  constructor() {
    this.#list = []
  }

  push(x: number): void {
    this.#list.push(x)
  }

  pop(): number {
    return this.#list.shift() ?? 0
  }

  peek(): number {
    return this.#list[0]
  }

  empty(): boolean {
    return this.#list.length === 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('Example #1', () => {
    const myQueue = new MyQueue()
    myQueue.push(1)
    expect(myQueue.peek()).toBe(1)
    myQueue.push(2)
    expect(myQueue.peek()).toBe(1)
    expect(myQueue.pop()).toBe(1)
    expect(myQueue.empty()).toBe(false)
  })
}
