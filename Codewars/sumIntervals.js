// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
// Sum of Intervals

/* function sumIntervals(intervals) {
  if (intervals.length === 1) return intervals[0][1] - intervals[0][0];

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let tempInterval = sortedIntervals[0];

  const overLappedIntervals = [];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];

    if (interval[0] <= tempInterval[1]) {
      if (interval[1] > tempInterval[1]) {
        tempInterval[1] = interval[1];
      } else {
        overLappedIntervals.push(tempInterval);
        tempInterval = sortedIntervals[i];
      }
    } else {
      overLappedIntervals.push(tempInterval);
      tempInterval = interval;
      i === sortedIntervals.length - 1 &&
        overLappedIntervals.push(tempInterval);
    }
  }

  let sum = 0;
  for (const interval of overLappedIntervals) {
    sum += interval[1] - interval[0];
  }
  return sum;
} */

function sumIntervals(intervals) {
  if (intervals.length === 0) return 0;

  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let tempInterval = sortedIntervals[0];
  const overlappingIntervals = [];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];

    if (interval[0] <= tempInterval[1]) {
      tempInterval[1] = Math.max(tempInterval[1], interval[1]);
    } else {
      overlappingIntervals.push(tempInterval);
      tempInterval = interval;
    }
  }

  overlappingIntervals.push(tempInterval);

  let sum = 0;
  for (const interval of overlappingIntervals) {
    sum += interval[1] - interval[0];
  }

  return sum;
}

console.log(sumIntervals([[1, 5]]));

console.log(
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
    [3, 5],
  ])
); // 7

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
); // 19

console.log(
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ])
); // 100000030
