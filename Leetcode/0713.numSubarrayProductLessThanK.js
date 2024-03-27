// 713. Subarray Product Less Than K

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
  let repeat = nums.length;
  // subArraysCounter
  let subArraysCounter = 0;
  // making subArrays
  // loop for num of elements in array [1] [1,2] [1,2,3] [1,2,3,4]
  let subArray = [];
  for (let i = 1; i <= nums.length; i++) {
    for (let c = 0; c < repeat; c++) {
      for (let j = 0; j < i; j++) {
        subArray.push(nums[j + c]);
      }
      console.log(subArray);
      //   reduce then compare to  < K
      if (subArray.reduce((acc, elem) => acc * elem, 1) < k) {
        subArraysCounter++;
      }
      subArray = [];
    }
    repeat--;
  }
  return subArraysCounter;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8
// Explanation: The 8 subArrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

console.log(numSubarrayProductLessThanK([1, 2, 3], 0)); // 0
console.log(numSubarrayProductLessThanK([1, 2, 3], 10)); //
