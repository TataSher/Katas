function counting (A, m) {

  const n = A.length;
  let count = new Array(m + 1);

  for (let i=0; i< count.length; ++i) {
    count[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    count[A[i]] += 1
    console.log(A[i], count )
  }
  console.log(count)
return count[m]

}

module.exports = counting;