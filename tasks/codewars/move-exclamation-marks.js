// @ts-check

/**
 * Exclamation marks series #8: Move all exclamation marks to the end of the sentence
 *
 * https://www.codewars.com/kata/57fafd0ed80daac48800019f
 *
 * $tag fundamentals
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const moveExclamationMarks = (str) => {
  const newStr = str.replace(/!/g, '');
  return newStr + '!'.repeat(str.length - newStr.length);
};

export { moveExclamationMarks };
