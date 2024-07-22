// Mean Square Error
// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

const meanSquareError = (A1, A2) =>
  A1.reduce((acc, elem, i) => acc + Math.abs(elem - A2[i]) ** 2, 0) / A1.length;

console.log(meanSquareError([1, 2, 3], [4, 5, 6])); //  9   because (9 + 9 + 9) / 3
console.log(meanSquareError([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5 because (0 + 25 + 25 + 16) / 4
console.log(meanSquareError([-1, 0], [0, -1])); //  1   because (1 + 1) / 2
