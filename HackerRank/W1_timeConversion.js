// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// PrepareInterview Preparation Kits1 Month Preparation KitWeek 1Time Conversion

function timeConversion(s) {
  // Write your code here
  const array = s.split(":");

  if (array[0] === "12") {
    if (s.at(-2) === "P") {
      array[2] = array[2].slice(0, 2);
      return array.join(":");
    }
    if (s.at(-2) === "A") {
      array[0] = "00";
    }
  }

  if (s.at(-2) === "P") {
    array[0] = array[0] * 1 + 12;
  }

  array[2] = array[2].slice(0, 2);
  return array.join(":");
}

console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:05:45PM")); // 19:05:45
console.log(timeConversion("12:05:45AM")); // 19:05:45
console.log(timeConversion("12:45:54PM")); // 19:05:45
