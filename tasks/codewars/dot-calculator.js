// @ts-check

/**
 * Dot Calculator
 *
 * https://www.codewars.com/kata/6071ef9cbe6ec400228d9531
 *
 * @param {string} str - Source string.
 * @returns {string} Result.
 */
const dotCalculator = (str) => {
  const methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, op, right] = str.split(' ');
  const result = methods[op](left.length, right.length);
  return '.'.repeat(result);
};

export { dotCalculator };
