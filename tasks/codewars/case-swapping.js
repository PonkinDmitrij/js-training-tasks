/**
 * @param {string} c - One character.
 * @returns {string} Reversed case character.
 */
const swapCase = (c) => {
  return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
};

/**
 * Case swapping
 *
 * https://www.codewars.com/kata/5590961e6620c0825000008f
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const swap = (str) => [...str].map(swapCase).join('');

export { swap };
