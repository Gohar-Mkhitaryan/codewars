//Given an n x n array, return the array elements arranged
//from outermost elements to the middle element, traveling clockwise.

const snail = (array) => {
  let result = [];
  while (array.length > 0) {
    result = result.concat(array.shift());
    array.forEach((element) => {
      result.push(element.pop());
    });
    array.forEach((element) => {
      element.reverse();
    });
    array.reverse();
  }
  return result;
};
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
