//-------------------SOLUCIÓN CON FUERZA BRUTA---------------
function SumArray (arr, n) {
  // Your code here:

  for(let i = 0; i < arr.length; i++){
  }
  
  for(let j = i + 1; j < arr2.length; j++){
    if(arr[i] + arr[j] === n) return true;
  }
  return false;
}
//COMPLEJIDAD >>> O(n^2)

//-----------------REFACTOR--------------------------
function SumArray(arr, n){
  let start = 0;
  let end = arr.length - 1;

  while(start !== end){
    const sum = arr[start] + arr[end];
    if(sum === n) return true;
    if(sum > n) end--;
    else start++;
  }

  return false;
}
// COMPLEJIDAD >>> O(n)

module.exports = SumArray;