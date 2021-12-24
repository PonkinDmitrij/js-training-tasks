// @ts-check

/**
 * Unpacking Arguments
 *
 * https://www.codewars.com/kata/unpacking-arguments
 *
 * $tag fundamentals, arguments, basic language features, declarative programming, functions, control flow, lambdas, functional programming, higher-order functions
 *
 * @param {function} func - Some function.
 * @param {[*]} args - A list of arguments.
 * @returns {*} Result of calling the given function/lambda with the given arguments.
 */
const spread = (func, args) => func(...args);

export { spread };
