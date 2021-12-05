// @ts-check

/**
 * Nickname Generator
 *
 * https://www.codewars.com/kata/nickname-generator
 *
 * $tag fundamentals strings regular expressions declarative programming advanced language features
 *
 * @param {string} name - Name.
 *
 * @returns {string} Nickname or error string.
 */
const nicknameGenerator = (name) => {
  if (name.length < 4) {
    return 'Error: Name too short';
  }
  if ('aeiou'.includes(name[2])) {
    return name.slice(0, 4);
  }
  return name.slice(0, 3);
};

export { nicknameGenerator };
