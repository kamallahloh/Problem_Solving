"use strict";
// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// PrepareInterview Preparation Kits1 Month Preparation KitWeek 1Sparse Arrays

function matchingStrings(strings, queries) {
  // Write your code here
  const array = [...strings];
  const result = [];
  let counter = 0;
  queries.forEach((element) => {
    while (array.includes(element)) {
      counter++;
      array.splice(array.indexOf(element), 1);
    }
    result.push(counter);
    counter = 0;
  });
  return result;
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
console.log(matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]));
// console.log(
//   matchingStrings(
//     [
//       "abcde",
//       "sdaklfj",
//       "asdjf",
//       "na",
//       "basdn",
//       "sdaklfj",
//       "sdjf",
//       "na",
//       "asdjf",
//       "na",
//       "basdn",
//       "sdaklfj",
//       "asdjf",
//     ],
//     ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
//   )
// );
