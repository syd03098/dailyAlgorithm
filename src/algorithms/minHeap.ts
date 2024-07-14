export default class MinHeap<T> {
  protected nodes: Array<T>

  constructor(private compare: (a: T, b: T) => number) {
    this.nodes = new Array()
  }

  public nodeList() {
    return this.nodes
  }

  private swap(index1: number, index2: number) {
    const temp = this.nodes[index1]
    this.nodes[index1] = this.nodes[index2]
    this.nodes[index2] = temp
  }

  public add(item: T) {
    const i = this.nodes.length
    this.nodes[i] = item
    this.heapifyUp(i)
  }

  private parentIdx(i: number) {
    return (i - 1 / 2) >> 0
  }

  private heapifyUp(idx: number) {
    /**
     * parent node idx
     */
    let i = this.parentIdx(idx)
    let j = idx

    while (j > 0 && this.compare(this.nodes[i], this.nodes[j]) < 0) {
      this.swap(i, j)
      j = i
      i = this.parentIdx(j)
    }
  }

  private heapifyDown(i: number) {
    let j: number = 2 * i + 1
    let k: number = i

    while (true) {
      if (
        j < this.nodes.length &&
        this.compare(this.nodes[j], this.nodes[k]) > 0
      ) {
        k = j
      }

      /**
       * move to right
       */
      j++
      if (
        j < this.nodes.length &&
        this.compare(this.nodes[j], this.nodes[k]) > 0
      ) {
        k = j
      }

      if (i === k) {
        break
      }

      this.swap(i, k)
      i = k
    }
  }

  public pop(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined
    }

    const rootNode = this.nodes[0]
    if (this.nodes.length > 1) {
      this.nodes[0] = this.nodes[this.nodes.length - 1]
    }

    this.nodes.length--
    if (this.nodes.length < 2) {
      return rootNode
    }

    this.heapifyDown(0)
    return rootNode
  }
}
