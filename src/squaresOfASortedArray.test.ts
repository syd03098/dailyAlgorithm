import { sortedSquares } from './squaresOfASortedArray'

describe('squaresOfASortedArray', () => {
    test('[-4,-1,0,3,10]', () => {
        expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100])
    })

    test('[-7,-3,2,3,11]', () => {
        expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121])
    })
})
