function countingValleys(steps, path) {
  altitude = 0
  valleyCount = 0
  for (let i = 0; i < steps; i++){
    console.log(path[i])
    path[i] === 'D' ? altitude-- : altitude ++;
    if (altitude === -1 && path[i] === 'D') {
      valleyCount++
      console.log(valleyCount)
    }
  }
  return valleyCount;
}

module.exports = countingValleys;