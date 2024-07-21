// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// Grasshopper - Summation

// const summation = (num) => (num === 1 ? 1 : num + summation(num - 1));

const summation = n => n * (n + 1) / 2; // best answer and time complixity from codewars.

console.log(summation(1));
console.log(summation(2));
console.log(summation(8));
