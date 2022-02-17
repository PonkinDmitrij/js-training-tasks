// @ts-check

// Last digits of a number
// https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0

const lastDigits = (num, count) => {
  if (count <= 0) return [];
  return [...String(num)].slice(-count).map(Number);
};

export { lastDigits };
