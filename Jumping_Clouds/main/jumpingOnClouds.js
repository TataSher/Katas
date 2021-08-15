function jumpingOnClouds(c) {
  let jumpCount = 0
  for (let i = 1; i < c.length; i++) {
    c[i] === 1 ? jumpCount : jumpCount++
     if (c[i] === 0 && c[i-1] === 0 && c[i+1] === 0){
       i++
    }
  }
  return jumpCount
}

module.exports = jumpingOnClouds;


// function jumpingOnClouds(c) {
//   let jumpCount = 0
//   for (let i = 0; i < c.length-1; i++) {
//      if (c[i] === 0){
//        i++
//     }
//    jumpCount++
//   }
//   return jumpCount
// }