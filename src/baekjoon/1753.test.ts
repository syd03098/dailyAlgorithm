import { solve } from './1753'

describe('dijkstra', () => {
    test('#1', () => {
        expect(
            solve({
                v: 5,
                e: 6,
                k: 1,
                verticies: [
                    [5, 1, 1],
                    [1, 2, 2],
                    [1, 3, 3],
                    [2, 3, 4],
                    [2, 4, 5],
                    [3, 4, 6],
                ],
            })
        ).toEqual([
            0,
            2,
            3,
            7,
            Infinity,
        ])
    })
})
