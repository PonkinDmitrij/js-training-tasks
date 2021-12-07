// @ts-check

/**
 * Digits explosion
 *
 * https://www.codewars.com/kata/digits-explosion
 *
 * $tag fundamentals, strings, regular expressions, declarative programming, advanced language features
 *
 * @param {string} str - Source string.
 *
 * @returns {string} Result string.
 */
const explode = (str) => {
  return str
    .split('')
    .map((elem) => elem.repeat(Number(elem)))
    .join('');
};

export { explode };
