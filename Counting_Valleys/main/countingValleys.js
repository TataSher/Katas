function countingValleys(steps, path) {
  let altitude = 0
  let valleyCount = 0
  for (let i = 0; i < steps; i++){
    path[i] === 'D' ? altitude-- : altitude ++;
    if (altitude === -1 && path[i] === 'D') {
      valleyCount++
    }
  }
  return valleyCount;
}

module.exports = countingValleys;