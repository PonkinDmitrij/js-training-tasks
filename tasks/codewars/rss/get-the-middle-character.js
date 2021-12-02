// @ts-check

/**
 * Get the Middle Character
 * https://www.codewars.com/kata/get-the-middle-character
 * $tag fundamentals strings
 * @param {string} str - Source string.
 * @returns {string} Result string.
 */
const getMiddle = (str) => {
  if (str.length % 2 === 0) {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  }
  const start = Math.floor(str.length / 2);
  return str.slice(start, start + 1);
};

export { getMiddle };
