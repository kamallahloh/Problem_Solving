// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript
// parseInt() reloaded
// convert writen number (string of words) to digital numbers.
const ones = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
// hundred
// thousand

/* function parseInt(string) {
  let s = string
    .replace("and ", "")
    .replace("-", " ")
    //.replace("hundred ", "")
    .split(" ")
    .map((elem, i, a) => {
      // change hundred to '' or 0 or 00
      //if (tens.includes(elem)) a[a.indexOf("hundred")] = "0";
      return elem;
    })
    .map((elem, i) =>
      tens.includes(elem) ? tens.indexOf(elem) : ones.indexOf(elem)
    );

  return s;
} */

const numberWords = [
  { number: "0", name: "zero" },
  { number: "1", name: "one" },
  { number: "2", name: "two" },
  { number: "3", name: "three" },
  { number: "4", name: "four" },
  { number: "5", name: "five" },
  { number: "6", name: "six" },
  { number: "7", name: "seven" },
  { number: "8", name: "eight" },
  { number: "9", name: "nine" },
  { number: "10", name: "ten" },
  { number: "11", name: "eleven" },
  { number: "12", name: "twelve" },
  { number: "13", name: "thirteen" },
  { number: "14", name: "fourteen" },
  { number: "15", name: "fifteen" },
  { number: "16", name: "sixteen" },
  { number: "17", name: "seventeen" },
  { number: "18", name: "eighteen" },
  { number: "19", name: "nineteen" },
  { number: "20", name: "twenty" },
  { number: "21", name: "twenty-one" },
  { number: "22", name: "twenty-two" },
  { number: "23", name: "twenty-three" },
  { number: "24", name: "twenty-four" },
  { number: "25", name: "twenty-five" },
  { number: "26", name: "twenty-six" },
  { number: "27", name: "twenty-seven" },
  { number: "28", name: "twenty-eight" },
  { number: "29", name: "twenty-nine" },
  { number: "30", name: "thirty" },
  { number: "31", name: "thirty-one" },
  { number: "32", name: "thirty-two" },
  { number: "33", name: "thirty-three" },
  { number: "34", name: "thirty-four" },
  { number: "35", name: "thirty-five" },
  { number: "36", name: "thirty-six" },
  { number: "37", name: "thirty-seven" },
  { number: "38", name: "thirty-eight" },
  { number: "39", name: "thirty-nine" },
  { number: "40", name: "forty" },
  { number: "41", name: "forty-one" },
  { number: "42", name: "forty-two" },
  { number: "43", name: "forty-three" },
  { number: "44", name: "forty-four" },
  { number: "45", name: "forty-five" },
  { number: "46", name: "forty-six" },
  { number: "47", name: "forty-seven" },
  { number: "48", name: "forty-eight" },
  { number: "49", name: "forty-nine" },
  { number: "50", name: "fifty" },
  { number: "51", name: "fifty-one" },
  { number: "52", name: "fifty-two" },
  { number: "53", name: "fifty-three" },
  { number: "54", name: "fifty-four" },
  { number: "55", name: "fifty-five" },
  { number: "56", name: "fifty-six" },
  { number: "57", name: "fifty-seven" },
  { number: "58", name: "fifty-eight" },
  { number: "59", name: "fifty-nine" },
  { number: "60", name: "sixty" },
  { number: "61", name: "sixty-one" },
  { number: "62", name: "sixty-two" },
  { number: "63", name: "sixty-three" },
  { number: "64", name: "sixty-four" },
  { number: "65", name: "sixty-five" },
  { number: "66", name: "sixty-six" },
  { number: "67", name: "sixty-seven" },
  { number: "68", name: "sixty-eight" },
  { number: "69", name: "sixty-nine" },
  { number: "70", name: "seventy" },
  { number: "71", name: "seventy-one" },
  { number: "72", name: "seventy-two" },
  { number: "73", name: "seventy-three" },
  { number: "74", name: "seventy-four" },
  { number: "75", name: "seventy-five" },
  { number: "76", name: "seventy-six" },
  { number: "77", name: "seventy-seven" },
  { number: "78", name: "seventy-eight" },
  { number: "79", name: "seventy-nine" },
  { number: "80", name: "eighty" },
  { number: "81", name: "eighty-one" },
  { number: "82", name: "eighty-two" },
  { number: "83", name: "eighty-three" },
  { number: "84", name: "eighty-four" },
  { number: "85", name: "eighty-five" },
  { number: "86", name: "eighty-six" },
  { number: "87", name: "eighty-seven" },
  { number: "88", name: "eighty-eight" },
  { number: "89", name: "eighty-nine" },
  { number: "90", name: "ninety" },
  { number: "91", name: "ninety-one" },
  { number: "92", name: "ninety-two" },
  { number: "93", name: "ninety-three" },
  { number: "94", name: "ninety-four" },
  { number: "95", name: "ninety-five" },
  { number: "96", name: "ninety-six" },
  { number: "97", name: "ninety-seven" },
  { number: "98", name: "ninety-eight" },
  { number: "99", name: "ninety-nine" },
  { number: "00", name: "hundred" },
];

function parseInt(string) {
  let s = string
    .replace("and ", "")
    //.replace(" hundred", "00")
    .split(" ")
/*     .map((elem, i) => {
      numberWords.forEach((ele) => {
        if (ele.name === elem) return ele.number;
      });
    }); */

  return s;
}

//console.log(parseInt("one")); // 1
//console.log(parseInt("twenty")); // 20
//console.log(parseInt("two hundred forty")); // 240
console.log(parseInt("two hundred and forty-six")); // 246
//console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen")); // 783919
