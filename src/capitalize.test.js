// import capitalize from "./capitalize.js";
const capitalize = require("./capitalize.js");
test("Capitalized letters", () => {
  let test = "pozdro";
  expect(capitalize(test)).toMatch(test.toUpperCase());
});
