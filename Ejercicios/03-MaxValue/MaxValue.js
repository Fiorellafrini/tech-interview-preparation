// function MaxValue (shares) {
  // Your code here:
//------------------SOLUCIÓN CON FUERZA BRUTA-----------------

// function MaxValue (shares) {
//   // Your code here:
//   let maxProfit = -Infinity; // 9

//   for(let i = 0; i < shares.length - 1; i++){
//     // [4, 3, 2, 5, 11]
//     //           i

//     const buy = shares[i]; // 5

//     for(let j = i + 1; j < shares.length; j++){
//       // [4, 3, 2, 5, 11]
//       //                  j

//       const sell = shares[j]; // 11
//       const actualProfit = sell - buy; // 6
//       if(actualProfit > maxProfit) maxProfit = actualProfit;
//     }
//   }
//   return maxProfit; // 9
// }
// COMPLEJIDAD >>> O(n*n) --> O(n^2)

//-------------------REFACTOR-----------------
function MaxValue (shares) {
  let maxProfit = -Infinity; // 9
  let minValue = shares[0]; // 2
  
  for(let i = 1; i < shares.length; i++){
    // [4, 3, 2, 5, 11]
    //                  i

    const sell = shares[i]; // 11
    const actualProfit = sell - minValue; // 9
    if(actualProfit > maxProfit) maxProfit = actualProfit;
    // if(sell < minValue) minValue = sell;
    minValue = sell < minValue ? sell : minValue;
  }

  return maxProfit; // 9
}
// COMPLEJIDAD >>> O(n)

console.log(MaxValue([4, 3, 2, 5, 11]));
module.exports = MaxValue

