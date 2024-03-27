// 9. Palindrome Number

// const isPalindrome = (x) => {
//   // -ve false
//   if (x < 0) return false;
//   // str
//   const str = x + "";
//   // split reverse join
//   const reverse = str.split("").reverse().join("");
//   // check
//   return str === reverse;
// };

const isPalindrome = (x) =>
  x < 0 ? false : x + "" === (x + "").split("").reverse().join("");

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
