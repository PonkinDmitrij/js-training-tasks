// @ts-check

/**
 * Combine objects
 *
 * https://www.codewars.com/kata/combine-objects
 *
 * $tag fundamentals, objects, arrays, hashes, data structures, dictionary
 *
 * @param  {...object} args - Two or more objects.
 *
 * @returns {object} A new object which combines all the input objects.
 */
const combine = (...args) => {
  return args.reduce((map, obj) => {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      map[key] = map[key] + obj[key] || obj[key];
    });
    return map;
  }, {});
};

export { combine };
