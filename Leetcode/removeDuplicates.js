// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
// Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => [...new Set(nums)];

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));