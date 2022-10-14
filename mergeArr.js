//Write a function that combines two arrays by alternatingly taking elements from each array in turn.
function mergeArrays(a, b) {
  let newArr = [];
  let maxLen = Math.max(a.length, b.length);
  for (let i = 0; i < maxLen; i++) {
    newArr.push(a[i]);
    newArr.push(b[i]);
  }
  return newArr.filter((el) => el !== undefined);
}
console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
