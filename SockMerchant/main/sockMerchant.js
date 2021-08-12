function sockMerchant(n, ar) {
  let pairCount = 0
  ar.sort()
  for (let i = 0; i < n; i ++) {

    if (ar[i] === ar[i+1]) {
      pairCount++
      i++
    }
  }
  return pairCount
}
module.exports = sockMerchant;