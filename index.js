function objectProperty(obj) {
  for (const value in obj) {
    if (typeof obj[value] === "string") {
      console.log(value, obj[value]);
    }
  }
}

const obj = {
  title: "head",
  count: 1,
  name: "hamayoon",
};
objectProperty(obj);
