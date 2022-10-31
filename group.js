const users = [
  {
    age: 17,
    name: "John",
  },
  {
    age: 12,
    name: "Ben",
  },
  {
    age: 19,
    name: "Arthur",
  },
  {
    age: 17,
    name: "Ann",
  },
  {
    age: 19,
    name: "Bob",
  },
  {
    age: 20,
    name: "Mary",
  },
];
function groupe(arr) {
  let obj = {};
  arr.forEach((element) => {
    let contact = obj[element.age];
    if (contact) {
      contact.push(element);
    } else {
      obj[element.age] = [element];
    }
  });
  return obj;
}
console.log(groupe(users));
