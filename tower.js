//Build a pyramid-shaped tower, as an array/list of strings, given a
// positive integer number of floors. A tower block is represented with "*" character.
function towerBuilder(nFloors) {
  let space,
    sym,
    newTower = [];
  for (let i = 1; i <= nFloors; i++) {
    space = " ".repeat(nFloors - i);

    sym = "*".repeat(2 * i - 1);
    newTower.push(`${space}${sym}${space}`);
  }
  return newTower;
}

console.log(towerBuilder(8));
