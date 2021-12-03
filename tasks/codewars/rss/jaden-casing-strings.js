// @ts-check

/**
 * Jaden Casing Strings
 *
 * https://www.codewars.com/kata/jaden-casing-strings
 *
 * $tag fundamentals strings arrays
 *
 * @param {string} str - Source string.
 *
 * @returns {string} Result string.
 */
const toJadenCase = (str) => {
  return str
    .split(' ')
    .map((word) => {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
};

export { toJadenCase };
