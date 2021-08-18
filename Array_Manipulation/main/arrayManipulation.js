function arrayManipulation(n, queries) {
  let array = new Array(n).fill(0);
  let startIndex = queries[0][0]
  let endIndex = queries[0][1]
  let value = queries[0][2]

  for (let i = startIndex; i <= endIndex; i++) {
    array[i] += value
  }

  return Math.max(...array)
}
module.exports = arrayManipulation;