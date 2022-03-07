// @ts-check

/**
 * Sum of Minimums
 *
 * https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
 *
 * @param {[[]]} arr - Array of integers.
 * @returns {number} Result.
 */
const sumOfMinimums = (arr) => {
  return arr.reduce((acc, a) => acc + Math.min(...a), 0);
};

export { sumOfMinimums };
