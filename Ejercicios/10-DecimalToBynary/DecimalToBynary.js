//----------------SOLUCIÓN CON FUERZA BRUTA-------------
function DecimalToBynary (num) { // 9
  // Math.floor(num / 2) 
  const binary = []; // ['1', '0', '0', '1']

  while(num > 0){ // 0 > 0
    const module = num % 2; // 1

    binary.push(module);
    
    num = Math.floor(num / 2);
  }

  return binary.reverse().join(''); // ['1', '0', '0', '1'] => '1001'
}

//---------------------REFACTOR----------------------
function DecimalToBynary(num){
  const binary = []; // ['1', '0', '0', '1']

  while(num > 0){ // 0 > 0
    const module = num % 2; // 1

    binary.unshift(module);
    
    num = Math.floor(num / 2);
  }

  return binary.join(''); 
}


//-------------------REFACTOR X2-----------------
function DecimalToBynary(num){
  let binary = '';

  while(num){
    binary = num % 2 + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

//-------------------RECURSIÓN---------------
function DecimalToBynary(num){ // 0
  const module = num % 2; // 0

  if(num) return DecimalToBynary(Math.floor(num / 2)) + module;
  // DecimalToBynary(Math.floor(num / 2)) + 1 >>> '' + 1 => '1'
  // DecimalToBynary(Math.floor(num / 2)) + 0 >>> '1' + 0 => '10'
  // DecimalToBynary(Math.floor(num / 2)) + 0 >>> '10' + 0 => '100'
  // DecimalToBynary(Math.floor(num / 2)) + 0 >>> '100' + 0 => '1000'
  return '';
}


//------------REFACTOR DE LA RECURSIÓN---------
function DecimalToBynary(num){
  return num ? DecimalToBynary(Math.floor(num / 2)) + num % 2 : '';
}









module.exports = DecimalToBynary;