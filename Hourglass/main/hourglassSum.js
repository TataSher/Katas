function hourglassSum(arr) {
  const hourGlassValues = []
  for (let a = 1; a < arr.length - 1; a++) {
    for (let i = 1; i < arr[a].length-1; i++) {
      let hourGlass = arr[a-1][i-1] + arr[a-1][i] + arr[a-1][i+1] + arr[a][i] + arr[a+1][i-1] + arr[a+1][i] + arr[a+1][i+1]
      hourGlassValues.push(hourGlass)
    }
  }
   return Math.max(...hourGlassValues)
}
module.exports = hourglassSum;