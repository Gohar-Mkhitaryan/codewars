//Your task is to create a function deepCount that returns the number of
//ALL elements within an array, including any within inner-level arrays.
function deepCount(a) {
  let count = 0;
  const countArr = (arr) => {
    count += arr.length;
    for (let i of arr) {
      if (Array.isArray(i)) {
        countArr(i);
      }
    }
  };
  countArr(a);
  return count;
}
console.log(deepCount([1, 2, [3, 4, [5]]])); //7
// or
// function deepCount(a){
//   let count = a.length;
//   for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//   return count;
// }
