const swap = (array: number[], i: number, j: number): void => {
  const tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}

const quickSort__INTERNAL = (
  array: number[],
  startIndex: number,
  endIndex: number
) => {
  if (startIndex >= endIndex) {
    return
  }

  let i = startIndex
  let j = endIndex
  const pivotValue = array[Math.floor((i + j) / 2)]

  while (i <= j) {
    // small
    while (pivotValue > array[i]) {
      i++
    }
    // large
    while (pivotValue < array[j]) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
    quickSort__INTERNAL(array, startIndex, j)
    quickSort__INTERNAL(array, i, endIndex)
  }
}

export const quickSort = (array: number[]) => {
  quickSort__INTERNAL(array, 0, array.length - 1)
}
