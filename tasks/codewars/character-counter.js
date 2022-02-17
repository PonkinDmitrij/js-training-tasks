// @ts-check

/**
 * Character Counter
 *
 * https://www.codewars.com/kata/56786a687e9a88d1cf00005d
 *
 * @param {string} str - Source string.
 * @returns {boolean} Result.
 */
const validateWord = (str) => {
  const map = [...str.toLowerCase()].reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});

  return Object.values(map).every((n, i, arr) => n === arr[0]);
};

export { validateWord };
