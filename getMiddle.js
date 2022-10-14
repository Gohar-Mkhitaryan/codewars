//You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
//If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
  let a = Math.floor(s.length / 2);
  let res = s[a];
  if (s.length % 2 === 0 && a > 0) {
    return s[a - 1] + res;
  }
  return res;
}

console.log(getMiddle("middle"));
console.log(getMiddle("testing"));
