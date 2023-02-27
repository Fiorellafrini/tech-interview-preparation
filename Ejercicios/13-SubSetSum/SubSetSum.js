// SET

// function subSetSum(nums, target) {
//   let sums = new Set([0]);

//   for (let num of nums) {
//     const sumsCopy = [...sums];

//     for (let sum of sumsCopy) {
//       const newSum = num + sum;

//       if (newSum === target) return true;

//       sums.add(newSum);
//     }
//   }
//   return false;
// }

// Recursion

// const subSetSum = (nums, target, index = 0) => {
//   if (target === 0) return true;
//   if (target < 0) return false;
//   if (index > nums.length) return false;
//   const whenExcluded = subSetSum(nums, target, index + 1);
//   const whenIncluded = subSetSum(nums, target - nums[index], index + 1);
//   return whenExcluded || whenIncluded;
// };

// Recursion con memoization

const subsetSumRecMemo = (nums, target, index = 0, memo = {}) => {
  if (memo.hasOwnProperty(target)) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  if (index > nums.length) return false;
  const whenIncluded = subsetSumRec(nums, target - nums[index], index + 1);
  const whenExcluded = subsetSumRec(nums, target, index + 1);
  memo[target] = whenExcluded;
  memo[target - nums[index]] = whenIncluded;
  return whenExcluded || whenIncluded;
};

module.exports = subSetSum;

console.log(subSetSum([1, 10, 5, 3], 9)); //(true);
// console.log(subSetSum([8, 10, -1], 9)); //(true);
console.log(subSetSum([1, 10, 5, 3], 2)); //(false);
console.log(subSetSum([1, 10, 5, 3], 10)); //(true);
