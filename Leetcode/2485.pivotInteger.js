// 2485. Find the Pivot Integer

/**
 * @param {number} n
 * @return {number}
 */
const pivotInteger = (n) => {
  for (let x = Math.floor(n / 2); x <= n; x++) {
    const before = (x * (x + 1)) / 2;
    const after = (n * (n + 1)) / 2 - ((x - 1) * (x - 1 + 1)) / 2;

    if (after === before) return x;
  }
  return -1;
};

console.log(pivotInteger(8)); // 6 Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
console.log(pivotInteger(1)); // 1
console.log(pivotInteger(4)); // -1
