//Write an algorithm that takes an array and
// moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let a = arr.filter((el) => el !== 0);
  let b = arr.filter((el) => el === 0);
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  return a;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
