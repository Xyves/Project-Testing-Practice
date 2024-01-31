const reverseString = require("./reverseString.js");
test("Check if the reverseString function works", () => {
  let sentence = "Blood";
  expect(reverseString(sentence)).toMatch(
    sentence.split("").reverse().join("")
  );
});
