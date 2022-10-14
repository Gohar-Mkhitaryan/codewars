// Write a function that returns the sum of two numbers.
// The input numbers are strings and the function must return a string.

function add(a, b) {
  let arr = [];
  let str = (BigInt(a) + BigInt(b)).toString(); // Fix me!
  arr.push(str);
  return arr.join("");
}
console.log(add("123", "321"));
console.log(add("11", "99"));
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
