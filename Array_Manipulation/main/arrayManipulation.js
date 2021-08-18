function arrayManipulation(n, queries) {
  let array = Array(n + 1)
  let maxValue = 0
  let currentNumber = 0
   
    queries.forEach(([startIndex, endIndex, value]) => {
      array[startIndex] = array[startIndex] || {start: 0, end: 0 };
      array[endIndex] = array[endIndex] || {start: 0, end: 0};
      array[startIndex].start += value
      array[endIndex].end += value
    });

    array.forEach(cell => {
      if (cell) {
        currentNumber += cell.start;

        if (currentNumber > maxValue) {
          maxValue = currentNumber;
        }
        currentNumber -= cell.end;
      }
    });

  return maxValue
}
module.exports = arrayManipulation;