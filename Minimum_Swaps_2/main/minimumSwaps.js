function minimumSwaps(arr) {
  let swaps = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1])
    swaps++
  }
  return swaps
}
module.exports = minimumSwaps;