// // slow solution

// function plusOne(n) {
//   result = 0
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i+1; j++)
//       result ++
//   }
//   return result
// }

// faster solution
// function plusOne(n) {
//   result = 0
//   for (let i = 0; i < n; i++) {
//     result += i + 1
//   }
//   return result
// }

// module solution

function plusOne(n) {
  result = Math.floor(n * (n + 1) / 2)
  return result
}


module.exports = plusOne;

