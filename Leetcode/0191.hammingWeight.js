// https://leetcode.com/problems/number-of-1-bits
// 191. Number of 1 Bits

/**
 * @param {number} n
 * @return {number}
 */
// const hammingWeight = (n) => n.toString(2).replace(/[^1-9]+/g, "").length;
const hammingWeight = (n) => n.toString(2).split("0").join("").length;

console.log(hammingWeight(11)); // 3 => 1011
console.log(hammingWeight(128)); // 1 => 10000000
console.log(hammingWeight(2147483645)); // 30 => 1111111111111111111111111111101
console.log(hammingWeight(1431655765)); // 16 => 1010101010101010101010101010101