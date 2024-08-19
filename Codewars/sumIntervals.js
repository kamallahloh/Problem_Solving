// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
// Sum of Intervals

function sumIntervals(intervals) {
  /*   let sum = 0;
  for (const interval of intervals) {
    sum += interval[1] - interval[0];
  }
  return sum; */
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  // [ [ 1, 5 ], [ 1, 6 ], [ 5, 11 ], [ 10, 20 ], [ 16, 19 ] ]

  const overLappedIntervals = [];

    

  return overLappedIntervals
}

/* console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); // 9

console.log(
  sumIntervals([
   [1, 4],
   [7, 10],
   [3, 5]
])
); // 7 */

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
); // 19
/*

console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ])
); // 100000030
 */
