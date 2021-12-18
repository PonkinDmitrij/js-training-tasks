// @ts-check

/**
 * Find the missing element between two arrays
 *
 * https://www.codewars.com/kata/find-the-missing-element-between-two-arrays
 *
 * $tag algorithms, numbers, arrays, interview questions
 *
 * @param {number[]} arr1 - Array of numbers.
 *
 * @param {number[]} arr2 - Array of numbers.
 *
 * @returns {number} Result.
 */
const findMissing = (arr1, arr2) => {
  const sum = (a, b) => a + b;
  return arr1.reduce(sum, 0) - arr2.reduce(sum, 0);
};

export { findMissing };
