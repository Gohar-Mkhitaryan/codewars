function isSolved(board) {
  function isWinner(element, item) {
    if (
      (element[0][0] === item &&
        element[0][1] === item &&
        element[0][2] === item) ||
      (element[1][0] === item &&
        element[1][1] === item &&
        element[1][2] === item) ||
      (element[2][0] === item &&
        element[2][1] === item &&
        element[2][2] === item) ||
      (element[0][0] === item &&
        element[1][0] === item &&
        element[2][0] === item) ||
      (element[0][1] === item &&
        element[1][1] === item &&
        element[2][1] === item) ||
      (element[0][2] === item &&
        element[1][2] === item &&
        element[2][2] === item) ||
      (element[0][0] === item &&
        element[1][1] === item &&
        element[2][2] === item) ||
      (element[0][2] === item &&
        element[1][1] === item &&
        element[2][0] === item)
    ) {
      return true;
    } else {
      return false;
    }
  }
  // if empty == true;
  function emptyspots(element) {
    let empty = false;
    element.forEach((arr1) => {
      arr1.forEach((arr2) => {
        if (arr2 === 0) {
          empty = true;
        }
      });
    });
    return empty;
  }

  if (isWinner(board, 1)) return 1;
  else if (isWinner(board, 2)) return 2;
  else if (emptyspots(board)) return -1;
  else return 0;
}
console.log(
  isSolved([
    [1, 1, 1],
    [0, 1, 2],
    [2, 1, 0],
  ])
);
