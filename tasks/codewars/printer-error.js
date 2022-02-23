// @ts-check

/**
 * Printer Errors
 *
 * https://www.codewars.com/kata/56541980fa08ab47a0000040
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const printerErrors = (str) => {
  let count = 0;

  for (const char of str) {
    if (char > 'm') {
      count += 1;
    }
  }

  return `${count}/${str.length}`;
};

export { printerErrors };
