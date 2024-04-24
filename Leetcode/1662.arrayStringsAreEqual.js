/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

// 1662. Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

const arrayStringsAreEqual = (word1, word2) =>
  word1.join("") === word2.join("");

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
