import { quickSort } from './quicksort'

describe('quickSort', () => {
    test('test#1', () => {
        const array = [3, 1, 6, 2, 8]
        quickSort(array)

        expect(array).toEqual([1, 2, 3, 6, 8])
    })
})
