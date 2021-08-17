function minimumBribes(q) {
  let bribeCount = 0

  for (let i = 0; i < q.length; i++) {
    // if the position of i is less than 2 it can't check the 2 digits in front
    // it establishes the start of the line where j elements will be compared
    let maxMove = q[i] - 2 > 0 ? q[i] - 2 : 0
    // if position is swapped more than 2 times by one person- it's too chaotic
    if (q[i] - (i + 1) > 2) {
      return 'Too chaotic'
    }
    // to compare max 2 positions with the current index we need another loop
    // we start by max 2 positions in front or 0 if it is too close to the start of the queue
    for (let j = maxMove; j < i; j++) {
      // if the value of the front number is more - then we add to the bribeCount
      if (q[j] > q[i]){
        bribeCount++
      }
    }
  }
  return bribeCount
}
module.exports = minimumBribes;