import { bfs, dfs } from './1260'

describe('dfs', () => {
    test('#1', () => {
        const result = dfs({
            n: 4,
            m: 5,
            v: 1,
            graph: [
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 4],
                [3, 4],
            ],
        })
        expect(result).toEqual([1, 2, 4, 3])
    })
})

describe('bfs', () => {
    test('#1', () => {
        const result = bfs({
            n: 4,
            m: 5,
            v: 1,
            graph: [
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 4],
                [3, 4],
            ],
        })
        expect(result).toEqual([1, 2, 3, 4])
    })
})
