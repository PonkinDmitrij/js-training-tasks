// @ts-check

/**
 * Maximum Triplet Sum (Array Series #7)
 *
 * https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7
 *
 * $tag fundamentals, numbers, basic language features, arrays, loops, control flow
 *
 * @param {number[]} arr - Array of numbers.
 * @returns {number} Result.
 */
const maxTriSum = (arr) => {
  return [...new Set(arr)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, n) => acc + n, 0);
};

export { maxTriSum };
