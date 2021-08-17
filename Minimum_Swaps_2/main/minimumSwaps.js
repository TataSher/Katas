function minimumSwaps(arr) {
  let swaps = 0
  let isChecked = []
  for (let i = 0; i < arr.length; i++) {
    let values = {}
    values['value'] = arr[i]
    values['visited'] = false
    isChecked.push(values)
  }
  for (let j = 0; j < isChecked.length; j++) {
    if (isChecked[j]['visited'] === false) {
      isChecked[j]['visited'] = true;

      if (isChecked[j]['value'] !== j + 1 ){
        let swapIndex = isChecked[j]['value']
        isChecked[swapIndex-1]['visited'] = true
        swaps++
      }
    }
  }
  return swaps
}
module.exports = minimumSwaps;