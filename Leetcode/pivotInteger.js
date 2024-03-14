/**
 * @param {number} n
 * @return {number}
 */
const pivotInteger = (n) => {
  for (let x = Math.floor(n / 2); x <= n; x++) {
    const before = [...new Array(x).keys()]
      .map((elem) => elem + 1)
      .reduce((acc, elem) => acc + elem, 0);
    // console.log(before);
    const after = [...new Array(n - x + 1).keys()]
      .map((elem) => elem + x)
      .reduce((acc, elem) => acc + elem, 0);
    // console.log(after);
    if (after === before) return x;
  }
  return -1;
};

console.log(pivotInteger(8)); // 6 Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
console.log(pivotInteger(1)); // 1
console.log(pivotInteger(4)); // -1
