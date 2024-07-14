import { describe, test, expect } from 'vitest'
import MinHeap from './minHeap'

interface Node {
  value: number
}

describe('minHeap', () => {
  test('basic', () => {
    /**
     *          0
     *      1        2
     * 3        4 5     6
     */
    const minHeap = new MinHeap<Node>((a, b) => b.value - a.value)
    minHeap.add({ value: 6 })
    minHeap.add({ value: 5 })
    minHeap.add({ value: 4 })
    minHeap.add({ value: 3 })
    minHeap.add({ value: 2 })
    minHeap.add({ value: 1 })
    minHeap.add({ value: 0 })

    expect(minHeap.pop()).toEqual({ value: 0 })
    expect(minHeap.pop()).toEqual({ value: 1 })
    expect(minHeap.pop()).toEqual({ value: 2 })
    expect(minHeap.pop()).toEqual({ value: 3 })
    expect(minHeap.pop()).toEqual({ value: 4 })
    expect(minHeap.pop()).toEqual({ value: 5 })
    expect(minHeap.pop()).toEqual({ value: 6 })
    expect(minHeap.pop()).toEqual(undefined)
  })
})
