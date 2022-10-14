//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  let a = arr.filter((el, i) => arr.indexOf(el) !== i);
  let filArr = arr.filter((item) => item !== a[0]);
  return filArr[0];
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));