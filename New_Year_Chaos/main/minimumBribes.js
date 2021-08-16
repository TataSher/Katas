function minimumBribes(q) {
  const originalQueue = [...q].sort()
  let bribeCount = 0
  for (let i = 1; i < q.length; i++) {
    console.log(q[i-1] === originalQueue[i])
    if (q[i-1] === originalQueue[i]) { 
      bribeCount++
    }
  }
  return bribeCount;
}
module.exports = minimumBribes;