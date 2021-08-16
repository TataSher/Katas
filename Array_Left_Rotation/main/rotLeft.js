function rotLeft(a, d) {
  let newArray = [ ...Array(a).keys() ].map( i => i+1);
  for (let j = 0; j < d; j++) {
        newArray[newArray.length] = newArray[0];
        newArray.shift()
  }
  return newArray.join(' ');
}
module.exports = rotLeft;
