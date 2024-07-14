// 배추밭의 가로길이 M(1 ≤ M ≤ 50)과 세로길이 N(1 ≤ N ≤ 50), 그리고 배추가 심어져 있는 위치의 개수 K(1 ≤ K ≤ 2500)
// 10 8 17

export const solution = ({
  m,
  n,
  k,
  graph,
}: {
  m: number
  n: number
  k: number
  graph: number[][]
}): number => {
  let result: number = 0
  let visited = Array.from({ length: n }, () => new Array(m).fill(false))

  let verticies = graph.reduce<boolean[][]>(
    (acc, cur) => {
      const [a, b] = cur
      acc[a][b] = true
      return acc
    },
    Array.from({ length: m }, () => new Array(n).fill(false))
  )

  function bfs(y: number, x: number) {
    let queue: number[][] = [[y, x]]
    while (queue.length > 0) {
      const node = queue.pop()
      if (node === undefined) {
        return
      }

      const [y, x] = node
      if (visited[y][x]) {
        return
      }

      visited[y][x] = true
      for (const [a, b] of [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0],
      ]) {
        const dy = y + a
        const dx = x + b
        if (dy >= 0 && dy < n && dx >= 0 && dx < m) {
          if (!visited[dy][dx] && verticies[dy][dx]) {
            queue.unshift([dy, dx])
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && verticies[i][j]) {
        result++
        bfs(i, j)
      }
    }
  }

  return result
}
