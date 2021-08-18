function arrayManipulation(n, queries) {
  let array = new Array(n).fill(0);
  let maxValue = 0

  for (let j = 0; j < queries.length; j++){
    let startIndex = queries[j][0]-1
    let endIndex = queries[j][1]
    let value = queries[j][2]
   

    for (let i = startIndex; i < endIndex; i++) {
        array[i] += value;
        if (array[i] > maxValue) {
          maxValue = array[i]
        }
    }
  }

  return maxValue
}
module.exports = arrayManipulation;