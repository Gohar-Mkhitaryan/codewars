// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  let a = str.split("");
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "_" || a[i] === "-") {
      a[i + 1] = a[i + 1].toUpperCase();
    }
  }
  console.log(a);
  let b = a.filter((el) => el !== "_" && el !== "-");
  return b.join("");
}
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("the-stealth-warrior"));
