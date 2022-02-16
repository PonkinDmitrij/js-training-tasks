// @ts-check

/**
 * Find the divisors!
 *
 * https://www.codewars.com/kata/544aed4c4a30184e960010f4
 *
 * @param {number} num - An integer n > 1.
 * @returns {number[]|string} Arr of numbers or string.
 */
const divisors = (num) => {
  const divs = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divs.push(i);
    }
  }

  return divs.length ? divs : `${num} is prime`;
};

export { divisors };
