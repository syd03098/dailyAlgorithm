export function dfs({
    n,
    m,
    v,
    graph,
}: {
    n: number
    m: number
    v: number
    graph: number[][]
}): number[] {
    let visited = new Array(n + 1).fill(false)
    let result: number[] = []
    let stack: number[] = [v]

    let verticies = graph.reduce<number[][]>(
        (acc, cur) => {
            const [a, b] = cur
            acc[a].push(b)
            acc[b].push(a)
            return acc
        },
        Array.from(new Array(n + 1), () => [])
    )

    while (stack.length > 0) {
        const node = stack.pop()
        if (node === undefined) {
            continue
        }
        if (visited[node]) {
            continue
        }
        const next = verticies[node].sort((a, b) => b - a)
        visited[node] = true
        result.push(node)
        for (const node of next) {
            stack.push(node)
        }
    }

    return result
}

export function bfs({
    n,
    m,
    v,
    graph,
}: {
    n: number
    m: number
    v: number
    graph: number[][]
}): number[] {
    let visitied = Array.from({ length: n + 1 }).fill(false)
    let result: number[] = []
    let queue: number[] = [v]

    let verticies = graph.reduce<number[][]>(
        (acc, cur) => {
            const [a, b] = cur
            acc[a].push(b)
            acc[b].push(a)
            return acc
        },
        Array.from({ length: n + 1 }, () => [])
    )

    while (queue.length > 0) {
        const node = queue.pop()
        if (node === undefined) {
            continue
        }
        if (visitied[node]) {
            continue
        }

        visitied[node] = true
        result.push(node)
        const nextNodes = verticies[node].sort()
        for (const node of nextNodes) {
            queue.unshift(node)
        }
    }

    return result
}
