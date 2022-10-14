// What is an anagram? Well, two words are
// anagrams of each other if they both contain the same letters.

function anagrams(word, words) {
  let txt1 = word.split("").sort().join("");
  console.log(txt1);
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    let txt2 = words[i].split("").sort().join("");
    console.log(txt2);
    if (txt1 === txt2) {
      newArr.push(words[i]);
    }
  }
  return newArr;
}
console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //=> ['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); //['carer', 'racer']
