function hourglassSum(arr) {
   let hourGlass = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2]
  
   return hourGlass
}
module.exports = hourglassSum;