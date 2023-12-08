console.log("test");

let kamal = "Kamal";

console.log(kamal[-1]);
console.log(kamal[0]);
console.log(kamal[5]);
console.log(kamal.charAt(-1));
console.log(kamal.charAt(0));
console.log(kamal.charAt(5));
console.log(kamal.at(-1));
console.log(kamal.at(0));
console.log(kamal.at(5));

//! /////////////////////////////////////
console.clear();



console.log(null && false);
console.log(null === false);
console.log(null === false);
console.log(null === false);



//! /////////////////////////////////////
console.clear();

let test0 = 2 ^ 0;
let test1 = 2 ^ 1;
let test2 = 2 ^ 2;
let test3 = 2 ^ 3;
let test4 = 2 ^ 4;
let test5 = 2 ^ 5;
let test6 = 2 ^ 6;
let test7 = 2 ^ 7;
let test8 = 2 ^ 8;

console.log(Math.pow(2, 4));
console.log(42 % 1);
console.log(42 % 2);
console.log(42 % 4);
console.log(42 % 8);
console.log(42 % 16);
console.log(42 % 32);
console.log(42 % 64);

console.log(test0);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
console.log(test7);
console.log(test8);

// let binary = [];
// let sum = 0;
// const countBits = (n) => {
//   // Program Me
//   if (n === 0) {
//     binary = [];
//     sum = 0;
//     return 0;
//   }

//   if (n === 1) {
//     binary.unshift(1);
//     sum++;
//     let finalAnswer = sum;
//     binary = [];
//     sum = 0;
//     return finalAnswer;
//   }
//   if (n % 2 === 0) {
//     binary.unshift(0);
//   } else {
//     binary.unshift(1);
//     sum++;
//     --n;
//   }
//   return countBits(n / 2);
// };

countBits = (n) => {
  console.log(typeof n);
  console.log(typeof Number(42));
  console.log(n.toString(2));
  console.log(parseInt(42).toString(2));
  return n.toString(2).split("0").join("").length;
};

// console.log(countBits(0));
// console.log(countBits(1));
// console.log(countBits(2));
// console.log(countBits(3));
// console.log(countBits(4)); //  00100
// console.log(countBits(7)); //  00111
// console.log(countBits(9)); //  01001
// console.log(countBits(10)); // 01010
// console.log(countBits(10));
// console.log(countBits(11));
// console.log(countBits(15));
// console.log(countBits(42));
console.log(countBits(43));
// console.log(countBits(64));

//! /////////////////////////////////////
console.clear();

function comp(array1, array2) {
  if(array1 === null || array2 === null) return false
  for (let index = 0; index < array1.length; index++) {
    const check = array2.some((ele,i) => {
      const matchCase = array1[index] * array1[index] === ele
      if (matchCase) {
        array1.splice(index,1)
        array2.splice(i,1)
        index--
      }
      return matchCase;
    });
    if (!check) return false
  }
  return true
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));
console.log(a2);

//! /////////////////////////////////////
console.clear();

