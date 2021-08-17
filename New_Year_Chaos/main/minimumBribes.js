function minimumBribes(q) {
  let bribeCount = 0
  let chaotic = false
  for (let i = q.length; i > 0; i--) {
    if ((i + 1) - q[i] > 2) {
      chaotic = true
    }
  }
  for (let i = q.length; i > 0; i--) {
    if (q[i] === (i+1)){
      bribeCount
    } else if ((i + 1) - q[i] === 2 || (i + 1) - q[i]  === 1 ) { 
      bribeCount++
    }
  }
  if (chaotic === true) {
    return "Too Chaotic"
  } else {
    return bribeCount
  }
}
module.exports = minimumBribes;