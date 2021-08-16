function hourglassSum(arr) {
  hourGlassValues = []
  for (a = 1; a < arr.length - 1; a++) {
    for (i = 1; i < arr[a].length-1; i++) {
      let hourGlass = arr[a-1][i-1] + arr[a-1][i] + arr[a-1][i+1] + arr[a][i] + arr[a+1][i-1] + arr[a+1][i] + arr[a+1][i+1]
      hourGlassValues.push(hourGlass)
    }
  }
  console.log(hourGlassValues)
   return Math.max(...hourGlassValues)
}
module.exports = hourglassSum;