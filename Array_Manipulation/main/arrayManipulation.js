function arrayManipulation(n, queries) {
  let array = new Array(n).fill(0);

  for (let j = 0; j < queries.length; j++){
    let startIndex = queries[j][0]
    let endIndex = queries[j][1]
    let value = queries[j][2]
   

    for (let i = startIndex; i <= endIndex; i++) {
        array[i] += value;
    }
  }
  maxValue = array.sort()[n-1]
  return maxValue
}
module.exports = arrayManipulation;