function uniqueInOrder(iterable) {
  let arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) arr.push(iterable[i]);
  }
  return arr;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
