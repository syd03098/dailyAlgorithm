export function numIslands(grid: string[][]): number {
    let result = 0
    let n = grid.length
    let m = grid[0].length
    let visited: boolean[][] = Array.from({ length: n }, () =>
        Array(m).fill(false)
    )

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!visited[i][j] && grid[i][j] === '1') {
                result += 1
                visited[i][j] = true
                let queue: number[][] = [[i, j]]

                while (queue.length > 0) {
                    const nodes = queue.shift()
                    if (nodes) {
                        const [y, x] = nodes
                        for (const [a, b] of [
                            [0, 1],
                            [-1, 0],
                            [0, -1],
                            [1, 0],
                        ]) {
                            const dy = y + a
                            const dx = x + b
                            if (dy >= 0 && dy < n && dx >= 0 && dx < m) {
                                if (!visited[dy][dx] && grid[dy][dx] === '1') {
                                    queue.push([dy, dx])
                                    visited[dy][dx] = true
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return result
}
