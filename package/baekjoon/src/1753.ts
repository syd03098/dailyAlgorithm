interface GraphNode {
  distance: number
  idx: number
}

export class MinHeap<T> {
  protected list: T[]
  protected compare: (a: T, b: T) => number

  constructor(compare: (a: T, b: T) => number) {
    this.list = []
    this.compare = compare
  }

  private swap(a: number, b: number) {
    const node = this.list[a]
    this.list[a] = this.list[b]
    this.list[b] = node
  }

  public get size(): number {
    return this.list.length
  }

  public get nodes(): T[] {
    return this.list
  }

  private parentIdx(i: number) {
    return Math.ceil((i - 1) / 2)
  }

  public add(node: T) {
    const lastIdx = this.list.length
    this.list[lastIdx] = node
    this.heapifyUp(lastIdx)
  }

  private heapifyUp(idx: number) {
    let parentIdx = this.parentIdx(idx)
    let currentIdx = idx

    while (
      currentIdx > 0 &&
      this.compare(this.list[parentIdx], this.list[currentIdx]) < 0
    ) {
      this.swap(parentIdx, currentIdx)
      currentIdx = parentIdx
      parentIdx = this.parentIdx(currentIdx)
    }
  }

  public pop() {
    if (this.list.length === 0) {
      return undefined
    }

    const rootNode = this.list[0]
    if (this.list.length > 1) {
      this.list[0] = this.list[this.list.length - 1]
    }

    this.list.length--
    if (this.list.length < 2) {
      return rootNode
    }

    this.heapifyDown(0)
    return rootNode
  }

  private heapifyDown(idx: number) {
    let childIdx = 2 * idx + 1
    let currentIdx = idx

    while (true) {
      if (
        childIdx < this.list.length &&
        this.compare(this.list[childIdx], this.list[currentIdx]) > 0
      ) {
        currentIdx = childIdx
      }

      childIdx++
      if (
        childIdx < this.list.length &&
        this.compare(this.list[childIdx], this.list[currentIdx]) > 0
      ) {
        currentIdx = childIdx
      }

      if (idx === currentIdx) {
        break
      }

      this.swap(idx, currentIdx)
      idx = currentIdx
    }
  }
}

/**
 * 첫째 줄부터 V개의 줄에 걸쳐, i번째 줄에 i번 정점으로의 최단 경로의 경로값을 출력한다. 시작점 자신은 0으로 출력하고,
 * 경로가 존재하지 않는 경우에는 INF를 출력하면 된다.
 *
 * 5 6
 * 1
 * 5 1 1
 * 1 2 2
 * 1 3 3
 * 2 3 4
 * 2 4 5
 * 3 4 6
 *
 * - @returns
 * 0
 * 2
 * 3
 * 7
 * INF
 */
export function solve({
  v,
  e,
  k,
  verticies,
}: {
  // 정점의 개수 V와 간선의 개수 E
  v: number
  e: number
  // 시작 정점의 번호 K(1 ≤ K ≤ V)가 주어진다.
  k: number
  verticies: number[][]
}) {
  const minHeap = new MinHeap<GraphNode>((a, b) => b.distance - a.distance)
  const distanceList: number[] = Array.from({ length: v + 1 }, () => Infinity)

  const graph = verticies.reduce<GraphNode[][]>(
    (acc, currentValue) => {
      const [from, to, distance] = currentValue
      acc[from].push({ idx: to, distance })

      return acc
    },
    Array.from({ length: v + 1 }, () => [])
  )

  distanceList[k] = 0
  minHeap.add({ idx: k, distance: 0 })

  while (minHeap.size > 0) {
    const node = minHeap.pop()
    if (node) {
      if (distanceList[node.idx] < node.distance) {
        continue
      }
      for (const nextNode of graph[node.idx]) {
        const nextDistance = node.distance + nextNode.distance
        if (distanceList[nextNode.idx] > nextDistance) {
          distanceList[nextNode.idx] = nextDistance
          minHeap.add({
            idx: nextNode.idx,
            distance: nextDistance,
          })
        }
      }
    }
  }

  distanceList.splice(0, 1)
  return distanceList
}
