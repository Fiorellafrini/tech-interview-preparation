// Fuerza Bruta

// function intersection(arr1, arr2) {
//   // Your code here:

//   const results = [];

//   arr1.forEach((element1) => {
//     arr2.forEach((element2) => {
//       if (element1 === element2) results.push(element1);
//     });
//   });

//   return results;
// }

// While OOOOH THE HORROR!!!

// function intersection(arr1,arr2){
//   let i = 0
//   let j = 0

// const results = []

// while (i<arr1.length && j < arr2.length){
//   if(arr1[i]<arr2[j]){
//     i++
//   } else if (arr1[i]>arr2[j]) {
//     j++
//   } else {
//     results.push(arr1[i])
//     i++
//     j++
//   }
// }
// return results

// }

// ES6

// function intersection(arr1,arr2){
//   return arr1.filter(element=> arr2.includes(element))
// }

// Map()
function intersection(arr1, arr2) {
  const arrMap = new Map(); // new Set()
  for (const num of arr1) arrMap.set(num, true); // [{1:true},{3:true},{5:true}]
  return arr2.filter((element) => arrMap.get(element));
}

module.exports = intersection;

console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])); // [3,10]

console.log(intersection([10, 5, 4, 3, 7], [3, 2, 6, 8, 10, 20]));
