const flattenObject = (obj) => {
  const flatObj = {};
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    //console.log(key);

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      Object.keys(obj[key]).length >= 1
    ) {
      const nestedFlatObj = flattenObject(obj[key]); //value
      //console.log(nestedFlatObj);
      const nestedKeys = Object.keys(nestedFlatObj); //key
      console.log(nestedKeys);

      for (let j = 0; j < nestedKeys.length; j++) {
        const nestedKey = nestedKeys[j];
        console.log(nestedKey);
        const combinedKey = `${key}/${nestedKey}`;

        flatObj[combinedKey] = nestedFlatObj[nestedKey];
      }
    } else {
      flatObj[key] = obj[key];
    }
  }

  return flatObj;
};

console.log(
  flattenObject({
    a: {
      b: {
        c: 12,
        d: "Hello World",
      },
      e: [1, 2, 3],
    },
  })
);
