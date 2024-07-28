type QueueNode = {
  row: number
  column: number
}

const DIRECTIONS = [
  // top
  [-1, 0],
  // left
  [0, -1],
  // right
  [0, 1],
  // bottom
  [1, 0],
] as const

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const initColor = image[sr][sc]

  const queue: QueueNode[] = [{ row: sr, column: sc }]

  if (initColor === color) {
    return image
  }

  while (queue.length > 0) {
    const dequeued = queue.shift()

    if (dequeued !== undefined) {
      const { row, column } = dequeued

      image[row][column] = color

      for (const [n_row, n_column] of DIRECTIONS) {
        const new_row = row + n_row
        const new_column = column + n_column
        if (
          // within bound
          new_row >= 0 &&
          new_column >= 0 &&
          new_row < image.length &&
          new_column < image[0].length &&
          // same initColor?
          image[new_row][new_column] === initColor
        ) {
          queue.push({ row: new_row, column: new_column })
        }
      }
    }
  }

  return image
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2', () => {
    expect(
      floodFill(
        [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        1,
        1,
        2
      )
    ).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ])
  })

  it('image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0', () => {
    expect(
      floodFill(
        [
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        0
      )
    ).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ])
  })
}
