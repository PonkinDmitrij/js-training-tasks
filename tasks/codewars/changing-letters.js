// @ts-check

/**
 * Changing letters
 *
 * https://www.codewars.com/kata/5831c204a31721e2ae000294
 *
 * tag $fundamentals, $strings, $regex
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const swap = (str) => str.replace(/[aeiou]/g, (el) => el.toUpperCase());

export { swap };
