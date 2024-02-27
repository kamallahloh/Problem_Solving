// console.log("test");

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

// console.log("test");

// console.log(null === 0); // false
// console.log(null == 0); // false
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null != 0); // true
// console.log(null !== 0); // true

// //! /////////////////////////////////////
// console.clear();

// console.log(null && false);
// console.log(null === false);
// console.log(null === false);
// console.log(null === false);

// //! /////////////////////////////////////
// console.clear();

// let test0 = 2 ^ 0;
// let test1 = 2 ^ 1;
// let test2 = 2 ^ 2;
// let test3 = 2 ^ 3;
// let test4 = 2 ^ 4;
// let test5 = 2 ^ 5;
// let test6 = 2 ^ 6;
// let test7 = 2 ^ 7;
// let test8 = 2 ^ 8;

// console.log(Math.pow(2, 4));
// console.log(42 % 1);
// console.log(42 % 2);
// console.log(42 % 4);
// console.log(42 % 8);
// console.log(42 % 16);
// console.log(42 % 32);
// console.log(42 % 64);

// console.log(test0);
// console.log(test1);
// console.log(test2);
// console.log(test3);
// console.log(test4);
// console.log(test5);
// console.log(test6);
// console.log(test7);
// console.log(test8);

// // let binary = [];
// // let sum = 0;
// // const countBits = (n) => {
// //   // Program Me
// //   if (n === 0) {
// //     binary = [];
// //     sum = 0;
// //     return 0;
// //   }

// //   if (n === 1) {
// //     binary.unshift(1);
// //     sum++;
// //     let finalAnswer = sum;
// //     binary = [];
// //     sum = 0;
// //     return finalAnswer;
// //   }
// //   if (n % 2 === 0) {
// //     binary.unshift(0);
// //   } else {
// //     binary.unshift(1);
// //     sum++;
// //     --n;
// //   }
// //   return countBits(n / 2);
// // };

// countBits = (n) => {
//   console.log(typeof n);
//   console.log(typeof Number(42));
//   console.log(n.toString(2));
//   console.log(parseInt(42).toString(2));
//   return n.toString(2).split("0").join("").length;
// };

// // console.log(countBits(0));
// // console.log(countBits(1));
// // console.log(countBits(2));
// // console.log(countBits(3));
// // console.log(countBits(4)); //  00100
// // console.log(countBits(7)); //  00111
// // console.log(countBits(9)); //  01001
// // console.log(countBits(10)); // 01010
// // console.log(countBits(10));
// // console.log(countBits(11));
// // console.log(countBits(15));
// // console.log(countBits(42));
// console.log(countBits(43));
// // console.log(countBits(64));

// //! /////////////////////////////////////
// console.clear();

// function comp(array1, array2) {
//   if (array1 === null || array2 === null) return false;
//   for (let index = 0; index < array1.length; index++) {
//     const check = array2.some((ele, i) => {
//       const matchCase = array1[index] * array1[index] === ele;
//       if (matchCase) {
//         array1.splice(index, 1);
//         array2.splice(i, 1);
//         index--;
//       }
//       return matchCase;
//     });
//     if (!check) return false;
//   }
//   return true;
// }

// let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// let a2 = [
//   11 * 11,
//   121 * 121,
//   144 * 144,
//   19 * 19,
//   161 * 161,
//   19 * 19,
//   144 * 144,
//   19 * 19,
// ];
// console.log(comp(a1, a2));
// console.log(a2);

// //! /////////////////////////////////////
// console.clear();

// /*
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
// */

// function rgb(r, g, b) {
//   return toHex(r) + toHex(g) + toHex(b);
// }

// const toHex = (x) => {
//   x > 255 ? (x = 255) : x < 0 ? (x = 0) : (x = x);

//   const hex =
//     x.toString(16) < 10 || Number.isNaN(x.toString(16))
//       ? 0 + x.toString(16)
//       : x.toString(16).length > 1
//       ? x.toString(16).toUpperCase()
//       : 0 + x.toString(16).toUpperCase();

//   return hex;
// };

// console.log(rgb(0, 0, -20));
// console.log(rgb(0, 0, 0));
// console.log(rgb(255, 255, 255));
// console.log(rgb(255, 255, 300));
// console.log(rgb(173, 255, 47)); // 'ADFF2F'
// console.log(rgb(12, 252, 69)); // '0CFC45'

// const a = 12;
// // const red =a.toString(16) < 10 || Number.isNaN(a.toString(16))? 0 + a.toString(16): a.toString(16).toUpperCase();
// const red = a.toString(16).length;
// const b = 16;
// const c = b ** 1;
// const d = b ** 2;
// const e = b ** 3;

// console.log(a / b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(red.toString(b));

// //! /////////////////////////////////////
// console.clear();

// /*
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// */

// function pigIt(str) {
//   let regex = /^[a-zA-Z]+$/;

//   return str
//     .split(" ")
//     .map(
//       (elem) =>
//         regex.test(elem) ? (elem = elem.slice(1) + elem.at(0) + "ay") : elem
//       /*  regex.test(elem) ? (elem = elem.substr(1) + elem.at(0) + "ay") : elem */
//     )
//     .join(" ");
// }

// console.log(pigIt("Pig latin is cool")); //igPay atinlay siay oolcay
// console.log(pigIt("This is my string !")); //hisTay siay ymay tringsay

// let t = "This is my string !";
// console.log(t.substr(5));
// console.log(t.substring(5));

// //! /////////////////////////////////////
// console.clear();
// /*
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// */
// class PaginationHelper {
//   constructor(collection, itemsPerPage) {
//     // The constructor takes in an array of items and a integer indicating how many
//     // items fit within a single page

//     this.collection = collection;
//     this.itemsPerPage = itemsPerPage;
//   }
//   itemCount() {
//     // returns the number of items within the entire collection
//     return this.collection.length;
//   }
//   pageCount() {
//     // returns the number of pages
//     return Math.ceil(this.collection.length / this.itemsPerPage);
//   }

//   pageItemCount(pageIndex) {
//     // returns the number of items on the current page. page_index is zero based.
//     // this method should return -1 for pageIndex values that are out of range

//     return pageIndex < this.pageCount() - 1 && pageIndex >= 0
//       ? this.itemsPerPage
//       : pageIndex === this.pageCount() - 1 && pageIndex >= 0
//       ? this.pageCount() % this.itemsPerPage === 0
//         ? this.itemCount() - pageIndex * this.itemsPerPage
//         : this.pageCount() < this.itemsPerPage
//         ? this.itemCount() % this.itemsPerPage === 0
//           ? this.itemsPerPage
//           : this.itemCount() % this.itemsPerPage
//         : this.itemsPerPage
//       : -1;
//   }

//   pageIndex(itemIndex) {
//     // determines what page an item is on. Zero based indexes
//     // this method should return -1 for itemIndex values that are out of range
//     return itemIndex >= 0 && itemIndex < this.itemCount()
//       ? Math.floor(itemIndex / this.itemsPerPage)
//       : -1;
//   }
// }

// const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
// console.log(helper.pageCount()); // should == 2
// console.log(helper.itemCount()); // should == 6
// console.log(helper.pageItemCount(0)); // should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // helper.pageItemCount(2);  for itemCount = 3 itemsPerPage = 1 equal 1
// // helper.pageItemCount(2);  for itemCount = 24 itemsPerPage = 10 equal 4

// // pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex(5)); // should == 1 (zero based index)
// console.log(helper.pageIndex(2)); // should == 0
// console.log(helper.pageIndex(20)); // should == -1
// console.log(helper.pageIndex(-10)); // should == -1

// //! /////////////////////////////////////
// console.clear();

// /*
// Take the following IPv4 address: 128.32.10.1

// This address has 4 octets where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

// Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

// Examples
// 2149583361 ==> "128.32.10.1"
// 32         ==> "0.0.0.32"
// 0          ==> "0.0.0.0"
// */

// /*
// 2149583361 ==> 10000000001000000000101000000001 ==> 10000000.00100000.00001010.00000001 ==> 128.32.10.1
// x                y =  x.toString(2)           y.padStart(32-y.length, '0')
// */
// int32ToIp = (int32) => {
//   let binary32 = int32.toString(2);
//   binary32 = binary32.padStart(32, "0");

//   const binary00to08 = parseInt(binary32.slice(0, 8), 2);
//   const binary08to16 = parseInt(binary32.slice(8, 16), 2);
//   const binary16to24 = parseInt(binary32.slice(16, 24), 2);
//   const binary24to32 = parseInt(binary32.slice(24, 32), 2);

//   return `${binary00to08}.${binary08to16}.${binary16to24}.${binary24to32}`;
// };

// let x = "10000000001000000000101000000001";
// console.log(x.toString(2));
// //                            10000000001000000000101000000001

// x = x.split("");
// y = x.splice(8, 0, ".");
// y = x.splice(17, 0, ".");
// y = x.splice(26, 0, ".");
// x = x.join("");
// console.log(x);

// console.log(2 ** 32 - 1);

// console.log(int32ToIp(2154959208)); // "128.114.17.104"
// console.log(int32ToIp(0)); // "0.0.0.0"
// console.log(int32ToIp(2149583361)); // "128.32.10.1"
// console.log(int32ToIp(2 ** 32 - 1)); // "255.255.255.255"
// console.log(int32ToIp(899641213)); // '53.159.111.125'

// let binary32 = parseInt(899641213).toString(2);
// binary32 = binary32.padStart(32, "0");
// console.log(binary32);
// const binary00to08 = parseInt(binary32.slice(0, 8), 2);
// console.log(binary00to08);

//! /////////////////////////////////////
// console.clear();

// const reverseStrArr = (s) => {
//   let [l, r] = [0, s.length - 1];
//   console.log(l, r);

//   // while (r > l) {
//   // [s[l], s[r]] = [s[r], s[l]]

//   // [l, r] = [l + 1, r - 1];
//   // }

//   for (let i = 0; i <= Math.floor(s.length / 2); i++) {
//     [s[l], s[r]] = [s[r], s[l]];
//     l++;
//     r--;
//   }

//   return s;
// };

// console.log(reverseStrArr(["a", "b", "c", "d", "e", "f", "g", "h"]));

//! /////////////////////////////////////
// console.clear();

// function isPrime(num) {
//   if (num < 2) return false;
//   // let divisor = 2;
//   // while (divisor < num) {
//   //   if (num % divisor === 0) return false;
//   //   divisor++;
//   // }
//   // return true;

//   if (num === 2 || num === 3) {
//     return true;
//   }

//   if (num % 2 === 0 || num % 3 === 0) {
//     return false;
//   }

//   for (let i = 5; i * i <= num; i += 6) {
//     if (num % i === 0 || num % (i + 2) === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));
// console.log(isPrime(11));
// console.log(isPrime(13));
// console.log(isPrime(15));

// // console.log(isPrime(4));
// // console.log(isPrime(5));
// // console.log(isPrime(6));
// // console.log(isPrime(7));
// // console.log(isPrime(11));
// // console.log(isPrime(13));
// // console.log(isPrime(15));

//! /////////////////////////////////////
// console.clear();

// // const descendingOrder = (n) => Array.from(`${n}`).sort().reverse().join("") * 1;
// const descendingOrder = (n) =>
//   `${n}`
//     .split("")
//     .sort((a, b) => b - a)
//     .join("") * 1;

// console.log(descendingOrder(65651));
// console.log(descendingOrder(231));
// console.log(descendingOrder(12));

// // let x = 5;
// // console.log(`${x}`);

// // let array = [11, 2, 1, 15, 7, 9, 53, 14];
// // console.log(array.sort((a, b) => a - b));

//! /////////////////////////////////////
// console.clear();

// function firstDup(s) {
//   const array = s.split("");
//   console.log(array);

//   for (let i = 0; i < array.length; i++) {
//     let theNumber = array[i];
//     let theChecker = 0;

//     for (let index = 0; index < array.length; index++) {
//       theNumber === array[index] ? theChecker++ : 0;
//       if (theChecker === 2) {
//         return theNumber;
//       }
//     }
//   }
//   return undefined;
// }

// //* from codewars best answer
// // function firstDup(s) {
// //   for (let i = 0; i < s.length; ++i) {
// //     // console.log([s[i],s.lastIndexOf(s[i])]);
// //     if (s.lastIndexOf(s[i]) !== i) return s[i];
// //   }
// // }

// console.log(firstDup("ode to joy")); //, "o");
// console.log(firstDup("tweet")); //, "t");
// console.log(firstDup("Ode to Joy")); //, " ");
// console.log(firstDup("bar")); //, undefined);
// console.log(firstDup("123123")); //, "1");
// console.log(firstDup("!@#$!@#$")); //, "!");

//! /////////////////////////////////////
// console.clear();

// const positiveSum = (arr) =>
//   arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);

// console.log(positiveSum([1, 2, 3, 4, 5])); //,15);
// console.log(positiveSum([1, -2, 3, 4, 5])); //,13);
// console.log(positiveSum([])); //,0);
// console.log(positiveSum([-1, -2, -3, -4, -5])); //,0);
// console.log(positiveSum([-1, 2, 3, 4, -5])); //,9);

//! /////////////////////////////////////
// console.clear();
// sumOfDivzBy3And5
// function solution(number) {
//   // console.log([...new Array(number).keys()]);  //  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//   let sum = 0;
//   number--;
//   while (number > 2) {
//     if (!(number % 3) || !(number % 5)) {
//       sum += number;
//     }
//     number--;
//   }
//   return sum;
// }

// console.log(solution(10)); // 23

//! /////////////////////////////////////
console.clear();
// Power of two
// https://www.codewars.com/kata/534d0a229345375d520006a0
// const isPowerOfTwo = (n) => Number.isInteger(Math.log2(n));

//! /////////////////////////////////////
console.clear();

// Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// const evenOrOdd = (number) => (number % 2 ? "Odd" : "Even");

//! /////////////////////////////////////
console.clear();

// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train

// const findShort = (s) =>
//   s
//     .split(" ")
//     .reduce(
//       (shortest, word) =>
//         word.length < shortest ? (shortest = word.length) : shortest,
//       Number.POSITIVE_INFINITY
//     );

// // best answer codewars
// /*
//     function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
//     */
// console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3

//! /////////////////////////////////////
console.clear();

// 7 kyu Factorial
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

// const factorial = (n) => {
//   if (n < 0 || n > 12) throw new ArgumentOutOfRangeException();

//   return [...Array(n).keys()].reduce((acc, num) => acc * (num + 1), 1);
//   return Array(n)
//     .fill()
//     .map((num, i) => i)
//     .reduce((acc, num) => acc * (num + 1), 1);
// };

// console.log(factorial(5));

//! /////////////////////////////////////
console.clear();

//8 kyu Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f
// const squareSum = (numbers) => numbers.reduce((acc, num) => acc + num ** 2, 0);

//! /////////////////////////////////////
console.clear();

// 8 kyu Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

const stringToNumber = (str) => str * 1;

/* 
const ways = [
	s => +s,
	s => s++,	// why does it work?
	s => s--,
	s => ++s - 1,
	s => --s + 1,

	s => s * 1,
	s => s - 0,
	s => s / 1,
	s => s - '',
	s => s ** 1,
	s => s % Infinity,

	s => ~~s,
	s => s & -1,
	s => s | 0,
	s => s ^ 0,
	s => s << 0,
	s => s >> 0,
	s => s | s,
	s => s & s,

	s => ~s ^ -1,
	s => ~s ^ ~0, // ~0 = -1
	s => ~(s ^ -1),
	s => s * !!s,

	s => -1 * (~s + 1) || 0, // -1 * 0 = -0
	s => -(~(s >>> 0) + 1) || 0,

	Number,
	parseInt,
	parseFloat,
	
	s => Number(s),
	s => parseInt(s),
	s => parseFloat(s),

	s => Math.floor(s),
	s => Math.round(s),
	s => Math.ceil(s),
	s => Math.min(s),
	s => Math.max(s),
	
	Math.floor,
	Math.round,
	Math.ceil,
	Math.min,
	Math.max,

	s => eval(`+ ${s}`), // a space is needed
	s => eval('+ ' + s), // for cases like eval(+ +12345)

	s => [...s]
		.slice(+(s[0] == '-' || s[0] == '+')) // remove the sign, if present
		.reduce((acc,x) => +x + acc * 10)
		* (s[0] == '-' ? -1 : 1),
	s => [...s]
		.slice(+(s[0] == '+')) //remove +, if present
		.reverse()
		.reduce((acc,x,i) => x == '-' ? -acc : acc += x * 10 ** i, 0),
	s => ways[~~(Math.random() * ways.length)](s)
];

// And now we will use all the methods in a row
//  © Mylene Farmer 
const checkThemAll  = (acc, x) => acc === x ? x : NaN;
const stringToNumber = str => ways.map(fn => fn(str)).reduce(checkThemAll);

*/

//! /////////////////////////////////////
console.clear();

// 8 kyu Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102
const makeNegative = (num) => -Math.abs(num);

//! /////////////////////////////////////
console.clear();

// // 8 kyu Remove First and Last Character
// // https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// // const removeChar = (str) =>
// //   str
// //     .split("")
// //     .slice(1, str.split("").length - 1)
// //     .join("");

// // Best answer from Codewars
// const removeChar = (str) => str.slice(1, -1);

// console.log(removeChar("Kamal"));

//! /////////////////////////////////////
console.clear();

//6 kyu Numbers of Letters of Numbers

// https://www.codewars.com/kata/599febdc3f64cd21d8000117

// const writtenNum = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

// function numbersOfLetters(integer) {
//   if (integer === 4 || integer === 5 || integer === 0 || integer === 9)
//     return ["four"];

//   let answer = [];

//   let compiledNum1 = (integer + "")
//     .split("")
//     .map((digit) => writtenNum[digit])
//     .join("");

//   answer.push(compiledNum1);

//   if (compiledNum1.length === 4) {
//     answer.push("four");
//     return answer;
//   }
//   let compiledNum2 = (compiledNum1.length + "")
//     .split("")
//     .map((digit) => writtenNum[digit])
//     .join("");

//   answer.push(compiledNum2);

//   if (compiledNum2.length === 4) {
//     answer.push("four");
//     return answer;
//   }
//   let compiledNum3 = (compiledNum2.length + "")
//     .split("")
//     .map((digit) => writtenNum[digit])
//     .join("");

//   answer.push(compiledNum3);

//   if (compiledNum3.length === 4) {
//     answer.push("four");
//     return answer;
//   }
//   let compiledNum4 = (compiledNum3.length + "")
//     .split("")
//     .map((digit) => writtenNum[digit])
//     .join("");

//   answer.push(compiledNum4);

//   if (compiledNum4.length === 4) {
//     answer.push("four");
//     return answer;
//   }
//   let compiledNum5 = (compiledNum4.length + "")
//     .split("")
//     .map((digit) => writtenNum[digit])
//     .join("");

//   answer.push(compiledNum5);

//   if (compiledNum5.length === 4) {
//     answer.push("four");
//     return answer;
//   }
//   let compiledNum6 = (compiledNum5.length + "")
//     .split("")
//     .map((digit) => writtenNum[digit])
//     .join("");

//   answer.push(compiledNum6);

//   if (compiledNum6.length === 4) {
//     answer.push("four");
//     return answer;
//   }
// }

// // best answer codewars

// /*

// function numbersOfLetters(integer) {
//     var hash = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     var result = [];

//     var text = 'q'.repeat(integer);

//     do {
//         text = (text.length + '').split('').map(number => hash[number]).join('');
//         result.push(text);
//     } while (text != hash[text.length]);

//     return result;
// }

// */
// console.log(numbersOfLetters(1)); //, ["one", "three", "five", "four"]));
// console.log(numbersOfLetters(12)); //, ["onetwo", "six", "three", "five", "four"]));
// console.log(numbersOfLetters(37)); //, ["threeseven", "onezero", "seven", "five", "four"]));
// console.log(numbersOfLetters(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]));
// console.log(numbersOfLetters(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]));

//! /////////////////////////////////////
console.clear();
