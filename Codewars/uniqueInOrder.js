// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// Unique In Order

/* const uniqueInOrder = function (iterable) {
  let compare = "";
  let j = 0;
  const array = [...iterable];
  const array1 = [...array];

  array1.forEach((elem, i) => {
    debugger;
    if (elem === compare) {
      array.splice(j, 1);
    } else {
      compare = elem;
      j++;
    }
  });

  return array;
}; */

const uniqueInOrder = (iterable) =>
  [...iterable].filter((elem, i, arr) => elem != arr[i - 1]);

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A','B','C','D','A','B']
console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
