// let kamal = "Kamal";

// console.log(kamal[-1]); // undef.
// console.log(kamal[0]); // K
// console.log(kamal[5]); // undef.

// console.log(kamal.charAt(-1)); // ''
// console.log(kamal.charAt(0)); // K
// console.log(kamal.charAt(5)); // ''

// console.log(kamal.at(-1)); // l
// console.log(kamal.at(0)); // K
// console.log(kamal.at(5)); // undef.

// console.log(kamal[kamal.length - 1]); // l

//! /////////////////////////////////////

// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null != 0); // true
// console.log(null !== 0); // true
// console.log(null && false); // null
// console.log(null === false); // false
// console.log(null == false); // false

// console.log(false != 0); // false
// console.log(true && false); // false
// console.log(true & false); // 0
// console.log(true || false); // true
// console.log(true | false); // 1

//! /////////////////////////////////////

// console.log([...new Array(10).keys()]); //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log([...new Array(10).keys()].map((x) => x + 1)); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//! /////////////////////////////////////

// 8 kyu Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

// const stringToNumber = (str) => str * 1;

// const ways = [
//   (s) => +s,
//   (s) => s++, // why does it work?
//   (s) => s--,
//   (s) => ++s - 1,
//   (s) => --s + 1,

//   (s) => s * 1,
//   (s) => s - 0,
//   (s) => s / 1,
//   (s) => s - "",
//   (s) => s ** 1,
//   (s) => s % Infinity,

//   (s) => ~~s,
//   (s) => s & -1,
//   (s) => s | 0,
//   (s) => s ^ 0,
//   (s) => s << 0,
//   (s) => s >> 0,
//   (s) => s | s,
//   (s) => s & s,

//   (s) => ~s ^ -1,
//   (s) => ~s ^ ~0, // ~0 = -1
//   (s) => ~(s ^ -1),
//   (s) => s * !!s,

//   (s) => -1 * (~s + 1) || 0, // -1 * 0 = -0
//   (s) => -(~(s >>> 0) + 1) || 0,

//   Number,
//   parseInt,
//   parseFloat,

//   (s) => Number(s),
//   (s) => parseInt(s),
//   (s) => parseFloat(s),

//   (s) => Math.floor(s),
//   (s) => Math.round(s),
//   (s) => Math.ceil(s),
//   (s) => Math.min(s),
//   (s) => Math.max(s),

//   Math.floor,
//   Math.round,
//   Math.ceil,
//   Math.min,
//   Math.max,

//   (s) => eval(`+ ${s}`), // a space is needed
//   (s) => eval("+ " + s), // for cases like eval(+ +12345)

//   (s) =>
//     [...s]
//       .slice(+(s[0] == "-" || s[0] == "+")) // remove the sign, if present
//       .reduce((acc, x) => +x + acc * 10) * (s[0] == "-" ? -1 : 1),
//   (s) =>
//     [...s]
//       .slice(+(s[0] == "+")) //remove +, if present
//       .reverse()
//       .reduce((acc, x, i) => (x == "-" ? -acc : (acc += x * 10 ** i)), 0),
//   (s) => ways[~~(Math.random() * ways.length)](s),
// ];

// And now we will use all the methods in a row
// const checkThemAll = (acc, x) => (acc === x ? x : NaN);
// const stringToNumber = (str) => ways.map((fn) => fn(str)).reduce(checkThemAll);

//! /////////////////////////////////////

// console.log(true + true); // 2

//! /////////////////////////////////////

// let x = true === []; // This condition will always return 'false' since JavaScript compares objects by reference, not value.
// let y = true === ![];

// console.log(x + y); // 0

//! /////////////////////////////////////
// style in browser inspect console

// const style =
// "background-color: darkblue; color: white; font-style: italic; border: 1px solid pink; font-size: 2em;";
// console.log("%cHooray", style);

//! /////////////////////////////////////

//* console timer _ counter

//* method 1
// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

//* method 2
// let i = 1;
// const interval = setInterval(() => {
//   console.log(i);
//   i++;
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

//! /////////////////////////////////////

// remove any number after the digit.
// float to int

// const int1 = 178.9 | 0;
// const int2 = (178.9 / 10) | 0;
// const int3 = (178.9 / 100) | 0;

// console.log(int1); // 178
// console.log(int2); // 17
// console.log(int3); // 1

//! /////////////////////////////////////

// truncate an array

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.length = 3;

// console.log(array); // [1, 2, 3]

//! /////////////////////////////////////

// console.log(0 == "0"); // true
// console.log(0 == []); // true
// console.log([] == "0"); // false

//! /////////////////////////////////////

// frequencyMap ====> time complexity = o(n)
const array = [1, 2, 4, 4, 3, 3, 1, 5, 3];

function createFrequencyMap(arr) {
  const frequencyMap = new Map();
  console.log(frequencyMap);

  for (const item of arr) {
    if (frequencyMap.has(item)) {
      frequencyMap.set(item, frequencyMap.get(item) + 1);
    } else {
      frequencyMap.set(item, 1);
    }
  }
  return frequencyMap;
}

console.log(createFrequencyMap(array));
