// @ts-check

/**
 * Coding Meetup #11 - Higher-Order Functions Series - Find the average age
 *
 * https://www.codewars.com/kata/582ba36cc1901399a70005fc
 *
 * @param {object[]} arr - Array of objects.
 * @returns {number} Result.
 */
const getAverageAge = (arr) => {
  const result = arr.reduce((acc, item) => acc + item.age, 0);
  return Math.round(result / arr.length);
};

export { getAverageAge };
