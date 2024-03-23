// 1. Two Sum

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     const elem1 = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const elem2 = nums[j];
//       console.log(elem2 + elem1);
//       if (elem2 + elem1 === target) return [i, j];
//     }
//   }
// };

const twoSum = (nums, target) => {
  obj = {};
  let answer = 0;
  nums.forEach((elem, i) => {
    if (Object.keys(obj).includes(target - elem + "")) {
      answer = [obj[target - elem], i];
    }
    obj[elem] = i;
  });
  return answer;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
// console.log(twoSum([3, 3], 6)); // [0,1]
// console.log(twoSum([-1, -2, -3, -4, -5], -8)); // [2,4]
