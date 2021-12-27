// @ts-check

/**
 * Who is the killer?
 *
 * https://www.codewars.com/kata/who-is-the-killer-1
 *
 * $tag fundamentals, dictionary, data structures, lists, objects
 *
 * @param {object} suspectInfo - A dictionary with all the names of the suspects and everyone that they have seen on that day.
 * @param {number[]} dead - A list of the names of the dead people.
 * @returns {string} The name of the one killer
 */
const killer = (suspectInfo, dead) => {
  for (const [name, arr] of Object.entries(suspectInfo)) {
    const isIncludeAll = dead.every((num) => arr.includes(num));
    if (isIncludeAll) {
      return name;
    }
  }
};

export { killer };
