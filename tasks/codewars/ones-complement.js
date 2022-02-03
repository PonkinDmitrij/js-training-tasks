// @ts-check

/**
 * Ones' Complement
 *
 * https://www.codewars.com/kata/59b11f57f322e5da45000254
 *
 * @param {string} str - Source string.
 * @returns {string} Result string.
 */
const onesComplement = (str) => {
  return str
    .split('')
    .map((n) => (n === '0' ? '1' : '0'))
    .join('');
};

export { onesComplement };
