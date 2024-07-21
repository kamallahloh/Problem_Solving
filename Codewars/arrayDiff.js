// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// Array.diff

/* const arrayDiff = (a, b) => {
  b.forEach((num) => {
    a = a.filter((elem) => elem != num);
  });
  return a;
}; */

const arrayDiff = (a, b) => a.filter((elem) => !b.includes(elem)); // CodeWars

console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
console.log(arrayDiff([1, 2], [1])); // [2], "a was [1,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [1])); // [2,2], "a was [1,2,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [2])); // [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2], "a was [1,2,2], b was []");
console.log(arrayDiff([], [1, 2])); // [], "a was [], b was [1,2]");
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3], "a was [1,2,3], b was [1,2]")