// @ts-check

/**
 * Currying functions: multiply all elements in an array
 *
 * https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array
 *
 * $tag fundamentals, closures, basic language features, functional programming, declarative programming
 *
 * @param {number[]} arr - Array of integers.
 *
 * @returns {function} Function, which takes a single integer as an argument and returns a new array.
 */
const multiplyAll = (arr) => (num) => arr.map((elem) => elem * num);

export { multiplyAll };
