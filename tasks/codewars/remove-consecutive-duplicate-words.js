// @ts-check

/**
 * Remove consecutive duplicate words
 *
 * https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
 *
 * $tag algorithms, strings, regular expressions, declarative programming, advanced language features, fundamentals
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const removeConsecutiveDuplicates = (str) =>
  str
    .split(' ')
    .filter((x, i, arr) => x !== arr[i - 1])
    .join(' ');

export { removeConsecutiveDuplicates };
