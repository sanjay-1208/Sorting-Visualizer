
function InsertionSort (blocks)  {
  const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

  const dupBlocks = blocks.slice() 
  const order = []

  let i, j

  for (i = 0; i < dupBlocks.length; i++) {
    j = i - 1
    while (j >= 0 && dupBlocks[j] > dupBlocks[j + 1]) {
      swap(dupBlocks, j, j + 1)
      order.push([j, j + 1, null, null]) 
      order.push([j, j + 1, dupBlocks.slice(), null]) 
      j -= 1
    }
  }

  for (i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i])
  }

  return order
}

export default InsertionSort;
