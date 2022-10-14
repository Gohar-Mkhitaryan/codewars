// Move the first letter of each word to the end of it, then add
// "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  let prop = "ay";
  let arr = str.split(" ").map((el) => {
    if (/[A-Za-z]+$/.test(el)) {
      return el.substr(1) + el[0] + prop;
    }
    return el;
  });

  return arr.join(" ");
}
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !"));
