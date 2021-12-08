// @ts-check

// Head, Tail, Init and Last
// https://www.codewars.com/kata/head-tail-init-and-last
// $tag fundamentals, arrays, ranges, basic language features, lists, data structures

const head = (arr) => arr[0];

const tail = (arr) => arr.slice(1);

const init = (arr) => arr.slice(0, arr.length - 1);

const last = (arr) => arr[arr.length - 1];

export { head, tail, init, last };
