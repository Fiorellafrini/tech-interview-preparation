function FindNeedle (haystack, needle) {
  // Your code here:
// ---------------SOLUCIÓN CON FUERZA BRUTA----------------

// function FindNeedle (haystack, needle) {
//   // Your code here:
//   console.log(haystack);
//   console.log(needle);​
//   for(let i = 0; i < haystack.length; i++){
//     // 'r e a c t - r e d u x'
//     //              i​
//     for(let j = 0; j < needle.length; j++){
//       // 'r e d u x'
//       //          j 

//       if(needle[j] !== haystack[i + j]) break;
//       if(j === needle.length - 1) return i;
//     }
//   }​
//   return -1;
//   // recorre el haystack (cada letra)
//   // por cada letra ver si coincide con la primera del needle
//     // si coincide, seguimos recorriendo needle
//     // si llegamos al final >>> lo encontramos y retornamos la posición en que inicia el needle
//     // si no lo encontramos retornamos -1
// }
// COMPLEJIDAD >>> O(n*m)​
//-------------------REFACTOR---------------------
function FindNeedle(haystack, needle){
  for(let i = 0; i < haystack.length; i++){
    // 'r e a c t - r e d u x'
    //              i
    
    const sliced = haystack.slice(i, i + needle.length); // 'r e d u x'
    if(sliced === needle) return i; // 'r e d u x' === 'r e d u x'
  }

  return -1;
}
// COMPLEJIDAD >>> O(n*m)​
FindNeedle('react-redux', 'redux')

module.exports = FindNeedle
}