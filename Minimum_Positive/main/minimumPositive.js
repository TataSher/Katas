function minimumPositive(A) {
    let smallestNumber = 1
    for (let i = 0; i < A.length; i++) {
      if (A[i] == smallestNumber) {
        smallestNumber++
      } else if (A[i] - smallestNumber == 1) {
        smallestNumber
      }
 
    }
    return smallestNumber
 }
module.exports = minimumPositive;