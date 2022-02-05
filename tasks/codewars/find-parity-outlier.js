// @ts-check

/**
 * Find The Parity Outlier
 *
 * https://www.codewars.com/kata/5526fc09a1bbd946250002dc
 *
 * @param {number[]} arr Array of numbers.
 * @returns {number} Result.
 */
const findOutlier = (arr) => {
  const even = arr.filter((n) => n % 2 === 0);
  const odd = arr.filter((n) => n % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
};

export { findOutlier };
