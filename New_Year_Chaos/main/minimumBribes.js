function minimumBribes(q) {
  const originalQueue = [...q].sort()
  let bribeCount = 0
  for (let i = 0; i < q.length-1; i++) {
    if ( originalQueue[i] === q[i+2] || originalQueue[i]=== q[i+1]) { 
      bribeCount++
    }
  }
  return bribeCount;
}
module.exports = minimumBribes;