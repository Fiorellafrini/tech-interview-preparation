//---------------SOLUCIÓN DE FUERZA BRUTA------------
function BinaryToDecimal (binary) {
  // num * 2 ** i

  binary = binary.split('').reverse();

  let result = 0;

  for(let i = 0; i < binary.length; i++){
    const num = binary[i];
    result = result + num * 2 ** i;
  }
  return result;
}

//--------------REFACTOR------------------
function BinaryToDecimal(binary){
  binary = binary.split('').reverse();

  let result = 0;

  binary.forEach((num, i) => {
    result += num * 2 ** i;
  })

  return result;
}

//----------------REFACTOR X2-------------
function BinaryToDecimal(binary){
  return binary
    .split('')
    .reverse()
    .reduce((result, num, i) => (result += num * 2 ** i), 0)
}

//----------------CON RECURSIÓN---------------
function BinaryToDecimal(binary){ //
  const num = binary[0]; // 

  const result = num * 2 ** (binary.length - 1); // 

  const rest = binary.slice(1); //

  if(rest) return result + BinaryToDecimal(rest); // 2 + 0 => 2 
  else return result;
}

//--------------REFACTOR DE LA RECURSIÓN-----------
function BinaryToDecimal(binary){
  const result = binary[0] * 2 ** (binary.length - 1);
  const rest = binary.slice(1);

  return rest 
    ? result + BinaryToDecimal(rest)
    : result;
}







module.exports = BinaryToDecimal;