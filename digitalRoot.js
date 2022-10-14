// Given n, take the sum of the digits of n. If that value has more than one digit, continue
// reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
function digitalRoot(n) {
  let sum = n;
  let arr = [];
  let redSum = (a, b) => +a + +b;
  while (sum > 9) {
    arr = sum.toString().split("");
    sum = arr.reduce(redSum);
  }
  return sum;
}
console.log(digitalRoot(16));
console.log(digitalRoot(456));
