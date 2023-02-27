//--------------------SOLUCIÓN FUERZA BRUTA-----------------
// function HasBalancedBrackets (string) { 
//   // Your code here:
//   if(string.length % 2 !== 0) return false;

//   const validOpeningBrackets = ['{', '[', '('];
//   const validClosingBrackets = ['}', ']', ')'];

//   const openBrackets = []; // [ '{', '(' ]

//   for(let i = 0; i < string.length; i++){
//     // '{ ( } )'
//     //      i

//     const bracket = string[i]; // '}'

//     if(validOpeningBrackets.includes(bracket)) openBrackets.push(bracket);

//     if(validClosingBrackets.includes(bracket)){
//       const j = validClosingBrackets.indexOf(bracket); // 0

//       const brother = validOpeningBrackets[j]; // '{'

//       const lastOpen = openBrackets[openBrackets.length - 1]; // '('

//       if(lastOpen === brother) openBrackets.pop();
//       else return false;
//     }
//   }

//   if(openBrackets.length) return false;
//   return true;
// }
// COMPLEJIDAD >>> O(n*n) >>> O(n^2)


//----------------------REFACTOR---------------------
// function HasBalancedBrackets (string) { 

//   const openBrackets = [];
//   const validBrackets = {
//     '{' : '}',
//     '[' : ']',
//     '(' : ')'
//   }

//   for(let i = 0; i < string.length; i++){
//     const bracket = string[i];

//     if(validBrackets[bracket]) openBrackets.push(bracket);
//     else{
//       const lastOpen = openBrackets[openBrackets.length - 1];
//       if(validBrackets[lastOpen] === bracket) openBrackets.pop();
//       else return false;
//     }
//   }

//   if(openBrackets.length) return false;
//   return true;

// }

//---------------------REFACTOR X2 ----------------------
function HasBalancedBrackets(string){
  const openBrackets = []; // [ ]
  const validBrackets = {
    '{' : '}',
    '[' : ']',
    '(' : ')'
  }

  for(const bracket of string){
    // '{ [ ] ( ) }'
    //               ^

    if(validBrackets[bracket]) openBrackets.push(bracket);
    else if(validBrackets[openBrackets.pop()] !== bracket) return false;
  }
  
  return !openBrackets.length; // true 
}
// COMPLEJIDAD >>> O(n)

console.log(HasBalancedBrackets('{ [ ] ( ) }')); // true

module.exports = HasBalancedBrackets;