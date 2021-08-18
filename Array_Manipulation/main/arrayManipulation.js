function arrayManipulation(n, queries) {
  let array = new Array(n).fill(0);

  for (let j = 0; j < queries.length; j++){
    let startIndex = queries[j][0]-1
    let endIndex = queries[j][1]
    let value = queries[j][2]
   

    for (let i = startIndex; i < endIndex; i++) {
        array[i] += value;
    }
  }
  array.sort(function(a, b) {
    return a - b;
  });
  let maxValue = array[n-1]
  return maxValue
}
module.exports = arrayManipulation;