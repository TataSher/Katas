//function below not very efficient - 22% on codility (due to performance)

// function minimumPositive(A) {
//     let smallestNumber = 1
//     for (let i = 0; i < A.length; i++) {
//       if (A[i] == smallestNumber) {
//         smallestNumber++
//       } else if (i > 0 && A[i] - A[i-1] > 1) {
//         smallestNumber++
//       }
//     }
//     return smallestNumber
//  }

//  function minimumPositive(A) {
//     let maximumValue = A.reduce((acc, val) => acc > val ? acc : val);
//     let minumumPositive = 1;
//     for (let i = 0 ; i < maximumValue + 1; i++) {
//         foundElement = A.find(element => element == i);
//         if(foundElement === undefined) {
//             minimumPositive = i;
//         }
//     }
//     return minimumPositive; 
// }

  function minimumPositive(A) {
    let maximumValue = A.reduce((acc, value) => acc > value ? acc : value);
    console.log(maximumValue)
    let minimumPositive = 1;
    for (let i = maximumValue + 1; i > 0; i--) {
        found = A.find(element => element == i);
        if(found === undefined) {
            minimumPositive = i;
        }
    }
    return minimumPositive; 
}
module.exports = minimumPositive;