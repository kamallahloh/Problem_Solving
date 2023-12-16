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
console.log(kamal[kamal.length - 1]);

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
  if (array1 === null || array2 === null) return false;
  for (let index = 0; index < array1.length; index++) {
    const check = array2.some((ele, i) => {
      const matchCase = array1[index] * array1[index] === ele;
      if (matchCase) {
        array1.splice(index, 1);
        array2.splice(i, 1);
        index--;
      }
      return matchCase;
    });
    if (!check) return false;
  }
  return true;
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

/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

function rgbFunction(r, g, b) {
  r > 255 ? (r = 255) : r < 0 ? (r = 0) : (r = r);
  g > 255 ? (g = 255) : g < 0 ? (g = 0) : (g = g);
  b > 255 ? (b = 255) : b < 0 ? (b = 0) : (b = b);

  const red =r.toString(16) < 10 || Number.isNaN(r.toString(16))? 0 + r.toString(16): r.toString(16).length>1?  r.toString(16).toUpperCase() : 0 + r.toString(16).toUpperCase() ;
  const green =g.toString(16) < 10 || Number.isNaN(g.toString(16))? 0 + g.toString(16): g.toString(16).length>1?  g.toString(16).toUpperCase() : 0 + g.toString(16).toUpperCase() ;
  const blue =b.toString(16) < 10 || Number.isNaN(b.toString(16))? 0 + b.toString(16): b.toString(16).length>1?  b.toString(16).toUpperCase() : 0 + b.toString(16).toUpperCase() ;

  return red + green + blue;
}

// const toHex = x => {}


console.log(rgbFunction(0, 0, -20));
console.log(rgbFunction(0, 0, 0));
console.log(rgbFunction(255, 255, 255));
console.log(rgbFunction(255, 255, 300));
console.log(rgbFunction(173, 255, 47)); // 'ADFF2F'
console.log(rgbFunction(12, 252, 69)); // '0CFC45'

const a = 12;
// const red =a.toString(16) < 10 || Number.isNaN(a.toString(16))? 0 + a.toString(16): a.toString(16).toUpperCase();
const red =a.toString(16).length;
const b = 16;
const c = b ** 1;
const d = b ** 2;
const e = b ** 3;

console.log(a / b);
console.log(c);
console.log(d);
console.log(e);
console.log(red.toString(b));
