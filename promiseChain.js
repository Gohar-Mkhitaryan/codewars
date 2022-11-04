const promises = [
  fetch("https://jsonplaceholder.typicode.com/todos/1"),
  //Promise.resolve(),
  fetch("https://jsonplaceholder.typicode.com/todos/2"),
  fetch("https://jsonplaceholder.typicode.com/todos/3"),
];

for (let i = 0; i < promises.length; i++) {
  promiseChain(promises[i]).then((result) => console.log(result));
}
async function promiseChain(promise) {
  return await promise;
}
