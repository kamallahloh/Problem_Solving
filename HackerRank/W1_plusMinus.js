// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// PrepareInterview Preparation Kits1 Month Preparation KitWeek 1Plus Minus

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let postives = 0;
  let negatives = 0;
  let zeros = 0;
  arr.forEach((elem) => {
    elem > 0 ? postives++ : elem < 0 ? negatives++ : zeros++;
  });

  const postiveCount =
    Math.round((postives / arr.length) * Math.pow(10, 6)) / Math.pow(10, 6);
  const negativeCount =
    Math.round((negatives / arr.length) * Math.pow(10, 6)) / Math.pow(10, 6);
  const zeroCount =
    Math.round((zeros / arr.length) * Math.pow(10, 6)) / Math.pow(10, 6);

  console.log(postiveCount);
  console.log(negativeCount);
  console.log(zeroCount);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
