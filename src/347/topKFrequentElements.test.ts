import { topKFrequent } from './topKFrequentElements'

describe('topKFrequentElements', () => {
    test('Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2]', () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    })

    test('Input: nums = [1], k = 1 Output: [1]', () => {
        expect(topKFrequent([1], 1)).toEqual([1])
    })

    test('[4,1,-1,2,-1,2,3], k = 2, Output: [-1,2]', () => {
        expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toEqual([2, -1])
    })
})
