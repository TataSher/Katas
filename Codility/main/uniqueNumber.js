// Elegant solution:
// function uniqueNumber(A) {
//  const uniqueNumbers = A.filter((value) => {
//    return A.indexOf(value) === A.lastIndexOf(value);
//  })
 
//  return uniqueNumbers[0] || -1
// }

function uniqueNumber(A) {
  
  let numberCounts = [];
  let uniqueNumber = -1

  A.forEach((number) => {
    if (numberCounts[number]) {
      numberCounts[number] ++
    } else {
      numberCounts[number] = 1
    }
  })
 console.log(numberCounts)

  for (let i = 0; i < A.length; i++)
    if (numberCounts[A[i]] === 1) {
      uniqueNumber = A[i]
      break;
    }

  return uniqueNumber
}



module.exports = uniqueNumber;