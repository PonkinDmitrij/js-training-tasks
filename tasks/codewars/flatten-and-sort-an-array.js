// @ts-check

/**
 * Flatten and sort an array
 *
 * https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
 *
 * tag $fundamentals, $arrays, $sorting, $algorithms, $lambdas, $functional programming, $functions, $declarative programming, $control flow, $basic language features
 *
 * @param {[]} arr - Source array.
 * @returns {number[]} Result.
 */
const flattenAndSort = (arr) => [].concat(...arr).sort((a, b) => a - b);

export { flattenAndSort };
