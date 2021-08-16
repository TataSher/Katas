function hourglassSum(arr) {
  hourGlassValues = []
  for (i = 1; i < arr[0].length-1; i++) {
    let hourGlass = arr[0][i-1] + arr[0][i] + arr[0][i+1] + arr[1][i] + arr[2][i-1] + arr[2][i] + arr[2][i+1]
    hourGlassValues.push(hourGlass)
  }
  console.log(hourGlassValues)
   return Math.max(...hourGlassValues)
}
module.exports = hourglassSum;