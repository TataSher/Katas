function rotLeft(a, d) {
  let newArray = [ ...Array(a).keys() ].map( i => i+1);
  for (let i = 0; i < a; i++) {
    if (i === 0) {
      newArray[newArray.length] = newArray[i];
      newArray.shift()
      console.log(newArray)
    }
    // } else { newArray[i-1] = newArray[i]}
  }
  return newArray.join(' ');

}
module.exports = rotLeft;