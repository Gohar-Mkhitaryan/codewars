//Write a method that takes an array of consecutive (increasing) letters as
//input and that returns the missing letter in the array.

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0);
  for (let i = 0; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0))
      return String.fromCharCode(first + i);
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
