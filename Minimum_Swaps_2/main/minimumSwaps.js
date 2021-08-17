function minimumSwaps(arr) {
  let swaps = 0
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== i+1) {
      let temp = arr[i];
      arr[i] = arr[temp-1];
      arr[temp-1] = temp;
      swaps++
      if (arr[i] !== i+1) {
        i--
      }
    }
  }
  return swaps
}
module.exports = minimumSwaps;