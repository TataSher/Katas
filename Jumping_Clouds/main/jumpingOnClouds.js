function jumpingOnClouds(c) {
  let jumpCount = 0
  for (let i = 1; i < c.length; i++) {
    c[i] != 1 ? jumpCount++ : jumpCount 
  }
  return jumpCount;
}

module.exports = jumpingOnClouds;