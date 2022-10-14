// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should
// return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
  let arr = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(" || parens[i] === "{" || parens[i] === "[") {
      arr.push(parens[i]);
    } else {
      if (arr.length === 0) {
        return false;
      }
      let lastSym = arr[arr.length - 1];
      if (
        (parens[i] === ")" && lastSym === "(") ||
        (parens[i] === "}" && lastSym === "{") ||
        (parens[i] === "]" && lastSym === "[")
      ) {
        arr.pop();
      } else {
        break;
      }
    }
  }
  return arr.length === 0;
}

console.log(validParentheses(validParentheses("())")));
