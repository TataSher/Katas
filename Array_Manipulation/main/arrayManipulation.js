function arrayManipulation(n, queries) {
  let array = new Array(n).fill(0);
  let maxValue = 0
   
    queries.map(query => {
    for (let i = query[0]-1; i < query[1]; i++) {
        array[i] += query[2];
        if (array[i] > maxValue) {
          maxValue = array[i]
        }
    }
  })

  return maxValue
}
module.exports = arrayManipulation;