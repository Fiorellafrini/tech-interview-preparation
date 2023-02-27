function spyOn(fn) {
  // Your code here:

  let callCount = 0;
  const calledWith = new Map();
  const returned = new Map();

  const spy = (...args) => {
    const result = fn(...args);
    callCount++;
    for (const arg of args) calledWith.set(arg, true);

    returned.set(result, true);

    return result;
  };

  spy.getCallCount = () => callCount;
  spy.wasCalledWith = (value) => !!calledWith.get(value); // true --> undefined
  spy.returned = (value) => !!returned.get(value);

  return spy;
}

const adder = (n1, n2) => {
  return n1 + n2;
};

module.exports = spyOn;

const adderSpy = spyOn(adder);

//Cuantas veces se ejecuta la funcion

// console.log(adderSpy.getCallCount()); //(0)
// adderSpy(2, 3);
// console.log(adderSpy.getCallCount()); //(1)
// adderSpy(4, 5);
// adderSpy(5, 6);
// console.log(adderSpy.getCallCount()); //(3)

// // Verificar si los argumentos ya fueron usados

// adderSpy(2, 3);
// console.log(adderSpy.wasCalledWith(2)); //(true)
// console.log(adderSpy.wasCalledWith(3)); //(true)
// adderSpy(2, 3);
// console.log(adderSpy.wasCalledWith(4)); //(false)
// console.log(adderSpy.wasCalledWith(5)); //(false)

// Verrificar si el resultado de adder ya fue devuelto anteriormente

adderSpy(2, 3);
adderSpy(2, 4);
console.log(adderSpy.returned(5)); //(true)
console.log(adderSpy.returned(6)); //(true
console.log(adderSpy.returned(6)); //(true)

adderSpy(2, 3);
console.log(adderSpy.returned(8)); //(false)
console.log(adderSpy.returned(7)); //(false)
