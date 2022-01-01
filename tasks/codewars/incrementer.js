// @ts-check

/**
 * Incrementer
 *
 * https://www.codewars.com/kata/590e03aef55cab099a0002e8
 *
 * $tag fundamentals
 *
 * @param {number[]} nums - An array of digits.
 * @returns {number[]} The array with each digit incremented by its position in the array.
 */
const incrementer = (nums) => nums.map((num, i) => (num + i + 1) % 10);

export { incrementer };
