//Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

function productFib(prod) {
  const fibonachi = (n) => {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return fibonachi(n - 1) + fibonachi(n - 2);
  };
  let i = 1;
  let first = 0;
  let second = 0;
  while (
    fibonachi(i) * fibonachi(i + 1) !== prod &&
    fibonachi(i) * fibonachi(i + 1) < prod
  ) {
    i++;
    first = fibonachi(i);
    second = fibonachi(i + 1);
  }
  if (first * second === prod) {
    return [first, second, true];
  }
  return [first, second, false];
}
console.log(productFib(4895));
