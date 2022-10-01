import { rotate } from './rotateArray'

describe('rorate array', () => {
    test('nums = [1,2,3,4,5,6,7], k = 3', () => {
        expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
    })

    test('nums = [-1,-100,3,99], k = 2', () => {
        expect(rotate([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
    })
})
